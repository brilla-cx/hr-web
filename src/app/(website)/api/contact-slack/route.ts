import { WebClient } from "@slack/web-api";

const slackToken = process.env.SLACK_ACCESS_TOKEN;
const slackClient = new WebClient(slackToken);

const websiteNotificationChannelID = "C05C5HKH0BW";

interface Message {
  fullName: string;
  email: string;
  message: string;
}

async function sendToSlack(message: Message) {
  try {
    await slackClient.chat.postMessage({
      channel: websiteNotificationChannelID,
      text: "HEY <@UT2K50031> <@UT2K50GQ7>",
      // eslint-disable-next-line camelcase
      link_names: true,
      blocks: [
        {
          type: "divider",
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":partying_face: *HEY NEW MESSAGE FROM HEYREBEKAH CONTACT PAGE*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `HEY <@UT2K50031> <@UT2K50GQ7>`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `* FullName: ${message.fullName}\n * Email: ${message.email}\n`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message*:\n ${message.message}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `\n\n\n\n${message.fullName} just submitted a form on contact page. Please reach out to them.`,
          },
        },
        {
          type: "divider",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: Request) {
  const data = await req.json();
  const { hostname } = new URL(req.url);

  const WEBSITE_URL_DEV = "http://localhost:3000";
  const WEBSITE_URL_PROD = "https://hr-web-beta.vercel.app";

  const baseOrigin = hostname.includes("localhost")
    ? WEBSITE_URL_DEV
    : WEBSITE_URL_PROD;

  try {
    sendToSlack({
      email: data.email,
      fullName: data.fullName,
      message: data.message,
    });
  } catch (error) {
    console.error(error);
  }

  const headers = new Headers();
  headers.append("credentials", "include");
  headers.append("Access-Control-Allow-Origin", baseOrigin);
  headers.append("Access-Control-Allow-Credentials", "true");

  return new Response(null, {
    status: 307,
    headers: {
      ...Object.fromEntries(headers),
    },
  });
}
