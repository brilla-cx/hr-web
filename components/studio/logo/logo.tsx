// components/studio/logo.tsx
import Image from "next/image";
import React, { FC } from "react";

import LogoImage from "./hey-rebekah-logo.svg"; // Update the path to your logo file

const hrLogo: FC = () => (
  <Image
    src={LogoImage}
    alt="Hey Rebekah Logo"
    width={100}
    height={25}
    style={{ height: "25px", width: "auto" }}
  />
);

export default hrLogo;
