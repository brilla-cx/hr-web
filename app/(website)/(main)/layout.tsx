/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";

import MainLayout from "@/components/main-layout";

export const revalidate = 86400;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
