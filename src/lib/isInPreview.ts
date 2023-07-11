import { draftMode } from "next/headers";

export const isInPreview = draftMode().isEnabled
  ? { token: process.env.SANITY_API_WRITE_TOKEN }
  : undefined;
