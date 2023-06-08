"use client";
import { usePathname } from "next/navigation";
import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";
import RebekaLayout from "./rebekah-radice/layout";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/rebekah-radice" ? (
        <RebekaLayout>{children}</RebekaLayout>
      ) : (
        <Layout>{children}</Layout>
      )}
    </div>
  );
}

export default MainLayout;
