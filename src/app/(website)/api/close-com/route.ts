import { WebClient } from "@slack/web-api";
import axios from "axios";

const slackToken = process.env.SLACK_ACCESS_TOKEN;
const closeToken = process.env.CLOSE_API_KEY;
import { cookies } from "next/headers";

const WEBSITE_URL_DEV = "http://localhost:3000";
const WEBSITE_URL_PROD = "https://heyrebekah.com";

const web = new WebClient(slackToken);

const partnersChannelId = "C04QDG8QRKL";

interface Message {
  companyName: string;
  name: string;
  message: string;
  closeLead: string;
}

// Find conversation ID using the conversations.list method
async function sednToSlack(message: Message) {
  try {
    await web.chat.postMessage({
      channel: partnersChannelId,
      text: "test",
      // eslint-disable-next-line camelcase
      thread_ts: "1683912786.200129",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ":partying_face: *NEW PARTNER INQUIRY*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hey <!channel>! I just created a new contact for you in Close.com.\n- Company: ${message.companyName}\n- Name: ${message.name}\n- Message: ${message.message}\n- Close Lead: <${message.closeLead}/|View lead>\n\nThey just submitted the Partner Contact form on heyrebekah. Reach out to them soon and be sure to use an email attached to close.com.`,
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
  const closeLeadEndpoint = "https://api.close.com/api/v1/lead";
  const closeContactEndpoint = "https://api.close.com/api/v1/contact";

  // Create preview URL
  const baseOrigin = hostname.includes("localhost")
    ? WEBSITE_URL_DEV
    : WEBSITE_URL_PROD;

  try {
    // Create a new lead
    const leadResponse = await axios.post(
      closeLeadEndpoint,
      {
        name: data.company || `${data.firstName} ${data.lastName}`,
        url: data.companyUrl,
        description: data.message ?? "",
      },
      {
        auth: {
          username: closeToken!,
          password: "",
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const leadId = leadResponse.data.id;
    // Create a new contact
    await axios.post(
      closeContactEndpoint,
      {
        // eslint-disable-next-line camelcase
        lead_id: leadId,
        name: `${data.firstName} ${data.lastName}`,
        title: data.jobTitle ?? "",
        phones: [{ phone: data.phoneNumber, type: "mobile" }],
        emails: [{ email: data.email, type: "office" }],
      },
      {
        auth: {
          username: closeToken!,
          password: "",
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    sednToSlack({
      closeLead: leadResponse.data.html_url!,
      companyName:
        `${data.firstName} ${data.lastName}, ${data.company}` ||
        `${data.firstName} ${data.lastName}, ${data.firstName} ${data.lastName}`,
      message: data.message ?? "",
      name: `${data.firstName} ${data.lastName}`,
    });
  } catch (error) {
    console.error("Failed to create contact or lead:", error);
  }

  const cookieStore = cookies();
  const cookie = cookieStore.get("__prerender_bypass");

  const headers = new Headers();
  headers.append("credentials", "include");
  headers.append("Cookie", `${cookie?.name}=${cookie?.value}` || "");
  headers.append("Access-Control-Allow-Origin", baseOrigin);
  headers.append("Access-Control-Allow-Credentials", "true");

  return new Response(null, {
    status: 307,
    headers: {
      ...Object.fromEntries(headers),
    },
  });
}
