const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_AUTH_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGN_IN_SECRET,
  customRoutes: [
    {
      path: "/slack/events",
      method: ["GET", "POST"],
      handler: (req, res) => {
        if (req.body && req.body.type === "url_verification") {
          const { challenge } = req.body;
          res.writeHead(200);
          res.end(challenge);
        }
      },
    },
  ],
});

module.exports = { app };
