import { useCallback } from "react";
import { BsSend } from "react-icons/bs";

import { postByIdQuery } from "./client";

export function SendToIterable({ id }) {

  const handleSend = useCallback(async (postId: string) => {
    try {
      const post = await postByIdQuery(postId);
      const response = await fetch(
        "http://localhost:3000/api/iterable/",
        {
         method: "put",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(post),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send data to Iterable");
      }
    } catch (error) {
      console.error("An error occurred while sending data to Iterable:", error);
    }
  }, []);

  return {
    label: "Send To Iterable",
    icon: BsSend,
    onHandle: () => handleSend(id),
  };
}
