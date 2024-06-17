const { app } = require("./slack.config");
const { firstFeedback } = require("./data/questions");
const {
  sendMessageToAllMembersWithAI,
  sendMessageWithIA,
  sendMessageToAllMembers,
} = require("./utils");
require("dotenv").config();

(async () => {
  const PORT = process.env.PORT || 5000;
  await app.start(PORT);

  // enviar un pool al enviar la palabra feedback al asistente
  app.message("feedback", async ({ message, say }) => {
    await say(firstFeedback);
  });

  // Enviar respuesta al usuario al completar el pool
  app.action({ block_id: /(feedback).*/i }, async ({ body, ack, say }) => {
    await ack();
    say("Gracias por participar :sonrisa:");
  });

  // Envía un mensaje a todos los miembros del wordpress con la respuesta de la AI
  sendMessageToAllMembersWithAI(
    "Eres un especialista de recursos humanos, pregúntale al usuario acerca de cómo se siente hoy en su trabajo."
  );

  // Envía un mensaje a todos los miembros del workspace
  sendMessageToAllMembers(
    "¡Hola a todos!\n\nQueremos mejorar tu experiencia laboral en JairoPY Tech. Ayúdanos completando una breve encuesta anónima sobre tu estado laboral. Tus respuestas nos ayudarán a identificar áreas de mejora.\n\nGracias por tu colaboración.\n\nSaludos,\nTu asistente laboral favorito"
  );

  // Configura el evento de escucha para mensajes entrantes
  app.event("message", async ({ message }) => {
    try {
      const { user, text } = message;
      //Verifica si el mensaje es del usuario y no del bot
      if (user !== app.botUserId) {
        // Envía el mensaje del usuario al chatbot de OpenAI
        const chatBotResponse = await sendMessageWithIA(text);

        // Envía la respuesta del chatbot al usuario
        await app.client.chat.postMessage({
          token: process.env.SLACK_AUTH_TOKEN,
          channel: user,
          text: chatBotResponse,
        });
      }
    } catch (error) {
      console.error("Error al procesar el mensaje:", error);
    }
  });

  console.log(`App running on port ${PORT}`);
})();
