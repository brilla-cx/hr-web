import { useCallback, useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";

import { postByIdQuery } from "./client";

export function SendToIterable({ id }) {
  const data = postByIdQuery(id);

  const handleSend = useCallback(async (postId) => {
    try {
      const post = await postByIdQuery(postId);
      const requestOptions = {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      };

      console.log(post, requestOptions);

      const response = await fetch(
        "http://localhost:3000/api/iterable/",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to send data to Iterable");
      }

      console.log("Data sent to Iterable successfully!");
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
