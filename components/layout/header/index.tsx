"use client";

import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate package
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="w-full h-20 bg-primary p-4 flex justify-between items-center ">
      <Image src="/logo.svg" alt="header" width={180} height={60} />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`toggle relative w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
          isMenuOpen ? "rotate-180" : ""
        }`}
      >
        <div
          className={`h-1 bg-white rounded-md  transition-all duration-500  ${
            isMenuOpen ? "absolute  rotate-45 w-full" : "w-[70%]"
          }`}
          id="bar1"
        ></div>
        <div
          className={`w-full h-1 bg-white rounded-md transition-all duration-500 
          ${isMenuOpen ? "absolute scale-0" : ""}`}
          id="bar2"
        ></div>
        <div
          className={`h-1 bg-white rounded-md  transition-all duration-500  ${
            isMenuOpen ? "absolute -rotate-45 w-full" : "w-[70%]"
          }`}
          id="bar3"
        ></div>
      </button>
      <nav
        className={`${
          isMenuOpen ? "scale-1" : "-translate-y-1/2 scale-0 translate-x-full"
        } flex flex-col z-20  items-center gap-4 absolute top-20 left-0 transition-all duration-500 ease-out w-full h-screen bg-primary p-4`}
      >
        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-white text-lg  transition-all hover:text-gray-100 duration-300 active:text-gray-100 ${
              "/" + pathname.split("/")[1] === link.href
                ? "text-gray-100 scale-110 font-bold "
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
