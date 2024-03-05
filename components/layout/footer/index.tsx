import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const Footer = () => {
  return (
    <footer className="bg-primary w-full flex flex-col lg:flex-row lg:justify-between items-center gap-4 p-4 ">
      <Image src="/logo.svg" alt="header" width={180} height={60} />
      <nav className="flex flex-col z-20  items-center gap-4 duration-500 ease-out w-full  bg-primary ">
        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-white text-lg   hover:text-gray-100 duration-300 active:text-gray-100 "
          >
            {link.name}
          </Link>
        ))}
        <div className="f"></div>
      </nav>
      <div className="ont-thin text-white border-t-4 border-solid border-t-white  text-center pt-4">
        &copy; Meditech 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
