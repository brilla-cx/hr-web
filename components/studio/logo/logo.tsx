// components/studio/logo.tsx
import React, { FC } from "react";
import LogoImage from "@/public/hey-rebekah-logo.svg"; // Update the path to your logo file
import Image from "next/image";

const hrLogo: FC = () => (
  <Image
    src={LogoImage}
    alt="Hey Rebekah Logo"
    style={{ height: "25px", width: "auto" }}
  />
);

export default hrLogo;
