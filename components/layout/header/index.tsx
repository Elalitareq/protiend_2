"use client";

import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate package
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <header className="w-full fixed inset-0 h-24 bg-primary p-4 flex justify-between items-center ">
      <Image
        src="/logo.svg"
        alt="header"
        objectFit="cover"
        width={180}
        height={60}
      />
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
        } flex flex-col gap-4 absolute top-24 left-0 transition-all duration-1000 ease-out w-full h-screen bg-primary p-4`}
      >
        <Link href="#" className="text-white">
          Home
        </Link>
        <Link href="#" className="text-white">
          About
        </Link>
        <Link href="#" className="text-white">
          Services
        </Link>
        <Link href="#" className="text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
