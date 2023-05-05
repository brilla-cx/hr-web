import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";
import LogoImage from "@/public/hey-rebekah-logo.svg";

import Menu from "./menu";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-dark-blue">
      <div className="relative py-5 shadow">
        <Container alt large>
          <div className="flex justify-between items-center gap-10">
            <div className="isolate" style={{ zIndex: 2 }}>
              <Link href="/">
                <div style={{ zIndex: 100 }}>
                  <Image
                    src={LogoImage}
                    alt="Hey Rebekah Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </Link>
            </div>
            <div style={{ zIndex: 1 }}>
              <Menu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
