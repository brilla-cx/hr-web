"use client";

import { LiveQueryProvider } from "next-sanity/preview";
import React, { useMemo } from "react";

import { getClient } from "@/sanity/preview";

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const client = useMemo(() => getClient({ preview: { token } }), [token]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
