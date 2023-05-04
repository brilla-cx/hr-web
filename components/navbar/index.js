import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";
import LogoImage from "@/public/hey-rebekah-logo.svg";

import Menu from "./menu";

export default function Navbar() {
  return (
    <div className="relative border-b-2 border-black py-5 bg-dark-blue">
      <Container alt large>
        <div className="flex justify-between items-center gap-10">
          <div className="isolate z-50">
            <Link href="/">
              <Image
                src={LogoImage}
                alt="Hey Rebekah Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </Container>
    </div>
  );
}
