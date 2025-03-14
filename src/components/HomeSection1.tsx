import Header from "@/components/Header";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function HomeSection1() {
  return (
    <div className="py-5 px-20 text-white bg-gradient-to-b to-darkBlue2 from-darkTeal1">
      <Header />
      <div className="flex flex-col m-5 md:flex-row justify-center gap-5">
        {/* right section */}
        <div className="flex flex-col gap-2 w-full justify-center items-center lg:items-start py-20">
          <div>
            <p className="text-amber-400 text-[50px] font-bold">Hi I&apos;m</p>
            <p className="text-[90px] font-khula l"> Suhud Ayodeji</p>
            <p className="text-[90px] font-khula l">Yekini</p>
            <p className="text-[20px]"> Data System Developer || Data Analyst || Aspiring Full Stack Developer</p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap md:m-0 gap-5 items-center justify-center w-full">
            <button
              type="button"
              title="Al-Yeqeen Apps"
              className="border- bg-amber-600 p-4 text-[18px] whitespace-nowrap mt-10 w-full rounded-md transform duration-200 hover:scale-105 font-bold"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See my Projects
            </button>
            <button
              type="button"
              title="Al-Yeqeen Apps"
              className="p-4 text-[18px] mt-10 w-full bg-white text-darkBlue2 whitespace-nowrap rounded-md transform duration-200 hover:scale-105 font-bold"
              onClick={() => {
                document.getElementById("workexperience")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Work Experience
            </button>
          </div>
        </div>

        {/* left div */}
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          <div className="w-[500px]">
            <Image
              src="/alyeqeenImage.png"
              alt="Suhud Image"
              width={600}
              height={0}
              className=" bottom-6 rounded-b-full w-full saturate-99 contrast-95 brightness-100"
            />
          </div>
          {/* <div className="flex flex-col items-center justify-center md:w-1/2">
            <div className="flex gap-5 p-4 font-bold w-full">
              <button
                type="button"
                title="Email Me"
                className={imageButtonStyling}
                onClick={() => {
                  document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Email Me
              </button>
              <button
                type="button"
                title="About Me"
                className={imageButtonStyling}
                onClick={() => {
                  document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Me
              </button>
            </div> */}
          {/* <div className="flex flex-row gap-5 justify-center items-center bg-white rounded-md p-4  transform duration-200 hover:scale-110">
              <a href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories" target="_blank">
                <FaGithub className="size-12 text-github  transform duration-200 hover:scale-110" />
              </a>
              <a href="https://wa.me/447840262030" target="_blank">
                <FaWhatsapp className="size-12 text-whatsapp  transform duration-200 hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/suhud-yekini-a78330234/" target="_blank">
                <FaLinkedinIn className="size-12 text-linkedin  transform duration-200 hover:scale-110" />
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
