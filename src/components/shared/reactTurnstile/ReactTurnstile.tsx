import React, { Dispatch, SetStateAction } from "react";
import Turnstile from "react-turnstile";

import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";

interface Props {
  setVerified: Dispatch<SetStateAction<boolean>>;
}

function ReactTurnstile(props: Props) {
  const { setVerified } = props;
  const handleVerify = async (token: string) => {
    if (token) {
      try {
        const response = await fetch("/api/turnstile-verify", {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: {
            "content-type": "application/json",
          },
        });
        if (response.ok) {
          setVerified(true);
        } else {
          console.error("Failed to verify token:", response.statusText);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };
  return (
    <Turnstile
      sitekey={CLOUDFLARE_SITE_KEY}
      onVerify={handleVerify}
      refreshExpired="auto"
    />
  );
}

export default ReactTurnstile;
