"use client";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../public/images/logo.png";

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <header id="header">
          <h1>
            <Link href="/">
              <Image src={Logo} alt="newWeb Logo" />
            </Link>
          </h1>
          <p className="hidden" id="header_skip">
            메인메뉴 시작
          </p>
          <div className="gnb">
            <ul>
              {navLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
