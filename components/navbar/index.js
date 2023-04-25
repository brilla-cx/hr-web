import Container from "@/components/container";
import Menu from "./menu";
import LogoImage from "@/public/hey-rebekah-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative border-b-2 border-black py-5">
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
