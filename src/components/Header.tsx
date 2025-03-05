"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [onProfile, setOnProfile] = useState(false);
  const parentLinkStyling = "hover:bg-darkBlue2/90 font-bold text-lg whitespace-nowrap p-2 rounded-md";
  const childLinkStyling =
    "hover:bg-white hover:text-darkBlue2 font-semibold transform duration-500 hover:scale-115 whitespace-nowrap w-full p-2 rounded ";

  const profileLinks = (
    <div className="absolute left-0 top-full bg-darkBlue2/90 rounded-md p-4 z-10">
      <ul className="flex flex-col gap-5">
        {" "}
        <Link href="/about" className={childLinkStyling}>
          <li>Work Experience</li>
        </Link>
        <Link href="/about" className={childLinkStyling}>
          <li>Education & Learning</li>
        </Link>
        <Link href="/about" className={childLinkStyling}>
          <li>About Me</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <div className="flex flex-wrap lg:nowrap justify-center xl:justify-between items-center lg:px-20 py-8 gap-4">
      <div className="flex-shrink-0">
        <Image src="/alyeqeenLogo.png" alt="Al-Yeqeen Logo" width={200} height={200} className="object-cover" />
      </div>
      <nav className="">
        <ul className="flex flex-wrap md:flex-nowrap gap-">
          <div
            className={`relative ${parentLinkStyling}`}
            onMouseEnter={() => setOnProfile(!onProfile)}
            onMouseLeave={() => setOnProfile(!onProfile)}
          >
            <Link href="/about" className="block">
              <li>Get to Know Me</li>
            </Link>
            {onProfile && profileLinks}
          </div>

          <Link href="/services" className={parentLinkStyling}>
            <li>Contact Me</li>
          </Link>
          <Link href="/contact" className={parentLinkStyling}>
            <li>Al-Yeqeen Apps</li>
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-1">
        <input
          type="input"
          placeholder="Looking for something?"
          className="outline-hidden focus:border text-lg border-white rounded-md p-2"
        />
        <FaSearch className="size-5" />
      </div>
    </div>
  );
}

export default Header;
