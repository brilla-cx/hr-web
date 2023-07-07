import React, { Dispatch, SetStateAction } from "react";
import Turnstile from "react-turnstile";

import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";

interface Props {
  setVerified: Dispatch<SetStateAction<boolean>>;
}

async function verifyToken(
  token: string,
  setVerified: Dispatch<SetStateAction<boolean>>
) {
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
    }
  } catch (error) {
    console.error("Error verifying token:", error);
  }
}

function ReactTurnstile({ setVerified }: Props) {
  const handleVerify = async (token: string) => {
    if (token) {
      await verifyToken(token, setVerified);
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
