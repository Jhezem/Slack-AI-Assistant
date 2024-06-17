const { app } = require("../slack.config");
const { openai } = require("../openai.config");

const getAllUsers = async () => {
  const users = await app.client.users.list();
  const { members } = users;

  return members.filter((member) => member.id === "U05DBC5344C");
};

const sendMessageWithIA = async (message) => {
  try {
    const botResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: message,
        },
      ],
    });

    const response = botResponse.data.choices[0].message.content;
    return response;
  } catch (e) {
    throw e;
  }
};

const sendMessageToAllMembers = async (message, blocks = []) => {
  try {
    const allUsers = await getAllUsers();

    for (const user of allUsers) {
      const { id } = user;

      await app.client.chat.postMessage({
        token: process.env.SLACK_AUTH_TOKEN,
        channel: id,
        text: message,
        blocks,
      });
    }
  } catch (error) {
    throw error;
  }
};

const sendMessageToAllMembersWithAI = async (message) => {
  try {
    const startConversationWithAI = await sendMessageWithIA(message);

    sendMessageToAllMembers(startConversationWithAI);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getAllUsers,
  sendMessageToAllMembers,
  sendMessageWithIA,
  sendMessageToAllMembersWithAI,
};
