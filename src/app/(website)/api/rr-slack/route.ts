import { WebClient } from "@slack/web-api";

const slackToken = process.env.SLACK_ACCESS_TOKEN;
const slackClient = new WebClient(slackToken);

const websiteNotificationChannelID = "C05C5HKH0BW";

interface Message {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

async function sendToSlack(message: Message) {
  try {
    await slackClient.chat.postMessage({
      channel: websiteNotificationChannelID,
      text: "HEY @ambreen @rebekah",
      // eslint-disable-next-line camelcase
      thread_ts: "",
      // eslint-disable-next-line camelcase
      link_names: true,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ":partying_face: *NEW MESSAGE FROM REBEKAH RADICE PAGE",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `HEY <!channel> <@UT2K50031> <@UT2K50GQ7> New message From ${message.fullName}.\n- Full Name: ${message.fullName}\n- Phone Number: ${message.phoneNumber}\n- Message: ${message.message}`,
          },
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
      phoneNumber: data.phoneNumber,
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
