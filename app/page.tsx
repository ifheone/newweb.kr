import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";

export default function Home() {
  // const red = "bg-custom-red";
  // const blue = "bg-custom-blue";
  // const black = "bg-custom-black";
  return (
    <section className="w-full h-screen md:flex md:items-center md:justify-center">
      <h2 className="hidden">메인 페이지</h2>
      <ul className="flex items-center justify-center h-screen text-center md:w-80 md:h-80 md:flex-wrap lg:w-full">
        <li className="h-full flex-1 bg-white md:w-36 md:h-36 md:flex-none md:m-px">
          <Link
            href="/"
            className="w-full h-full flex items-center justify-center"
          >
            <Image src={Logo} alt="newWeb" />
          </Link>
        </li>
        {navLinks.map(({ title, href, color }) => (
          <li
            key={title}
            className={`h-full flex-1 ${color} md:w-36 md:h-36 md:flex-none md:m-px`}
          >
            {/* <li key={title} className={`bg-[${color}]`}> */}
            <Link
              href={href}
              className="w-full h-full flex items-center justify-center text-white"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
