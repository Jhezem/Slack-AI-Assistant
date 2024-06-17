const firstFeedback = {
  text: "Feedback",
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*1. ¿Cómo te sientes en tu puesto de trabajo actual?*\nVota haciendo clic en los botones de abajo:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question1",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Muy satisfecho",
          },
          value: "Muy satisfecho",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Satisfecho",
          },
          value: "Satisfecho",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Neutral",
          },
          value: "Neutral",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Insatisfecho",
          },
          value: "Insatisfecho",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Muy insatisfecho",
          },
          value: "Muy insatisfecho",
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*2. ¿Qué aspectos disfrutas más de trabajar en nuestra organización?*\nSelecciona todas las opciones que correspondan:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question2",
      elements: [
        {
          type: "checkboxes",
          options: [
            {
              text: {
                type: "plain_text",
                text: "El ambiente de trabajo",
              },
              value: "El ambiente de trabajo",
            },
            {
              text: {
                type: "plain_text",
                text: "El equipo con el que trabajo",
              },
              value: "El equipo con el que trabajo",
            },
            {
              text: {
                type: "plain_text",
                text: "Las oportunidades de crecimiento y desarrollo",
              },
              value: "Las oportunidades de crecimiento y desarrollo",
            },
            {
              text: {
                type: "plain_text",
                text: "La comunicación interna",
              },
              value: "La comunicación interna",
            },
            {
              text: {
                type: "plain_text",
                text: "La flexibilidad laboral",
              },
              value: "La flexibilidad laboral",
            },
            {
              text: {
                type: "plain_text",
                text: "Los beneficios y compensaciones",
              },
              value: "Los beneficios y compensaciones",
            },
            {
              text: {
                type: "plain_text",
                text: "Otro",
              },
              value: "Otro",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*3. ¿En qué aspectos crees que podríamos mejorar como organización?*\nSelecciona todas las opciones que correspondan:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question3",
      elements: [
        {
          type: "checkboxes",
          options: [
            {
              text: {
                type: "plain_text",
                text: "Comunicación interna",
              },
              value: "Comunicación interna",
            },
            {
              text: {
                type: "plain_text",
                text: "Relaciones interpersonales",
              },
              value: "Relaciones interpersonales",
            },
            {
              text: {
                type: "plain_text",
                text: "Reconocimiento y valoración del trabajo realizado",
              },
              value: "Reconocimiento y valoración del trabajo realizado",
            },
            {
              text: {
                type: "plain_text",
                text: "Carga de trabajo y equilibrio laboral",
              },
              value: "Carga de trabajo y equilibrio laboral",
            },
            {
              text: {
                type: "plain_text",
                text: "Procesos y herramientas de trabajo",
              },
              value: "Procesos y herramientas de trabajo",
            },
            {
              text: {
                type: "plain_text",
                text: "Oportunidades de desarrollo profesional",
              },
              value: "Oportunidades de desarrollo profesional",
            },
            {
              text: {
                type: "plain_text",
                text: "Otro",
              },
              value: "Otro",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*4. ¿Cómo describirías el ambiente en nuestra oficina?*\nSelecciona la opción que mejor aplique:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question4",
      elements: [
        {
          type: "radio_buttons",
          options: [
            {
              text: {
                type: "plain_text",
                text: "Cálido y acogedor",
              },
              value: "Cálido y acogedor",
            },
            {
              text: {
                type: "plain_text",
                text: "Profesional y serio",
              },
              value: "Profesional y serio",
            },
            {
              text: {
                type: "plain_text",
                text: "Colaborativo y amigable",
              },
              value: "Colaborativo y amigable",
            },
            {
              text: {
                type: "plain_text",
                text: "Estresante y tenso",
              },
              value: "Estresante y tenso",
            },
            {
              text: {
                type: "plain_text",
                text: "Otro",
              },
              value: "Otro",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*5. ¿Te sientes valorado y reconocido por tu trabajo en nuestra organización?*\nSelecciona la opción que mejor aplique:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question5",
      elements: [
        {
          type: "radio_buttons",
          options: [
            {
              text: {
                type: "plain_text",
                text: "Sí, siempre me siento valorado",
              },
              value: "Sí, siempre me siento valorado",
            },
            {
              text: {
                type: "plain_text",
                text: "La mayoría de las veces me siento valorado",
              },
              value: "La mayoría de las veces me siento valorado",
            },
            {
              text: {
                type: "plain_text",
                text: "A veces me siento valorado",
              },
              value: "A veces me siento valorado",
            },
            {
              text: {
                type: "plain_text",
                text: "Rara vez me siento valorado",
              },
              value: "Rara vez me siento valorado",
            },
            {
              text: {
                type: "plain_text",
                text: "No me siento valorado",
              },
              value: "No me siento valorado",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*6. ¿Recomendarías nuestra organización como un excelente lugar para trabajar?*\nSelecciona la opción que mejor aplique:",
      },
    },
    {
      type: "actions",
      block_id: "feedback_question6",
      elements: [
        {
          type: "radio_buttons",
          options: [
            {
              text: {
                type: "plain_text",
                text: "Definitivamente sí",
              },
              value: "Definitivamente sí",
            },
            {
              text: {
                type: "plain_text",
                text: "Probablemente sí",
              },
              value: "Probablemente sí",
            },
            {
              text: {
                type: "plain_text",
                text: "No estoy seguro",
              },
              value: "No estoy seguro",
            },
            {
              text: {
                type: "plain_text",
                text: "Probablemente no",
              },
              value: "Probablemente no",
            },
            {
              text: {
                type: "plain_text",
                text: "Definitivamente no",
              },
              value: "Definitivamente no",
            },
          ],
        },
      ],
    },
    {
      type: "input",
      block_id: "feedback_question7",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: "feedback_question7",
      },
      label: {
        type: "plain_text",
        text: "7. ¿Tienes algún comentario adicional o sugerencia que nos ayude a mejorar el ambiente laboral?",
      },
    },
  ],
};

module.exports = { firstFeedback };
