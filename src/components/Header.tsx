"use client";

import Image from "next/image";
// import { FaSearch } from "react-icons/fa";
// import Link from "next/link";
// import { useState } from "react";

function Header() {
  // const [onProfile, setOnProfile] = useState(false);
  // const parentLinkStyling = "hover:bg-darkBlue2/90 font-bold text-lg whitespace-nowrap p-2 rounded-md";
  const childLinkStyling =
    "hover:bg-white text-center hover:text-darkBlue2 font-semibold text-lg transform duration-500 hover:scale-115 whitespace-nowrap w-full p-2 rounded hover:cursor-pointer";

  // const profileLinks = (
  //   <div className="absolute left-0 top-full bg-darkBlue2/90 rounded-md p-4 z-10">
  //     <ul className="flex flex-col gap-5">
  //       <Link href="/about" className={childLinkStyling}>
  //         <li>Work Experience</li>
  //       </Link>
  //       <Link href="/about" className={childLinkStyling}>
  //         <li>Education</li>
  //       </Link>
  //       <Link href="/about" className={childLinkStyling}>
  //         <li>About Me</li>
  //       </Link>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="flex flex-wrap lg:nowrap items-center justify-center lg:px-20 py-8 gap-y-5 gap-x-50">
      <div className="flex-shrink-0">
        <Image src="/alyeqeenLogo.png" alt="Al-Yeqeen Logo" width={200} height={200} className="object-cover" />
      </div>
      <nav className="">
        {/* <ul className="flex flex-wrap md:flex-nowrap gap-5">
          <div
            className={`relative ${parentLinkStyling}`}
            onMouseEnter={() => setOnProfile(!onProfile)}
            onMouseLeave={() => setOnProfile(!onProfile)}
          >
            <li>Get to Know Me</li>

            {onProfile && profileLinks}
          </div>

          <li>Contact Me</li>

          <li>Al-Yeqeen Apps</li>
        </ul> */}
        <ul className="flex flex-wrap md:flex-nowrap gap-5">
          <li
            className={childLinkStyling}
            onClick={() => {
              document.getElementById("workexperience")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Work Experience
          </li>
          <li
            className={childLinkStyling}
            onClick={() => {
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </li>
          <li
            className={childLinkStyling}
            onClick={() => {
              document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Education
          </li>

          <li
            className={childLinkStyling}
            onClick={() => {
              document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </li>
        </ul>
      </nav>
      {/* <div className="flex items-center gap-1">
        <input
          type="input"
          placeholder="Looking for something?"
          className="outline-hidden focus:border text-lg border-white rounded-md p-2"
        />
        <FaSearch className="size-5" />
      </div> */}
    </div>
  );
}

export default Header;
