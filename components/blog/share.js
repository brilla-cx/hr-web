"use client";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function SocialShare({ title, url }) {
  return (
    <div className="flex gap-2 items-center">
      <FacebookShareButton quote={title} url={url}>
        <FacebookIcon
          size={32}
          round
          iconFillColor="black"
          bgStyle={{ fill: "white" }}
        />
      </FacebookShareButton>

      <TwitterShareButton title={title} url={url}>
        <TwitterIcon
          size={32}
          round
          iconFillColor="black"
          bgStyle={{ fill: "white" }}
        />
      </TwitterShareButton>

      <LinkedinShareButton title={title} url={url}>
        <LinkedinIcon
          size={32}
          round
          iconFillColor="black"
          bgStyle={{ fill: "white" }}
        />
      </LinkedinShareButton>

      <EmailShareButton subject={title} url={url}>
        <EmailIcon
          size={32}
          round
          iconFillColor="black"
          bgStyle={{ fill: "white" }}
        />
      </EmailShareButton>
    </div>
  );
}
