import Header from "@/components/Header";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function HomeSection1() {
  const imageButtonStyling =
    "bg-white p-4 text-blue-900 text-lg font-extrabold rounded-md transform duration-200 hover:scale-110 w-full";

  return (
    <div className="bg-blue-800 py-5 px-40  text-white">
      <Header />
      <div className="flex flex-col md:flex-row items-center gap-10 justify-between mt-15 lg:mt-0">
        {/* right section */}
        <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
          <div>
            <p className="text-[#ABB009] text-[50px] font-bold">Hi I&apos;m</p>
            <p className="text-[90px] font-khula l"> Suhud Ayodeji</p>
            <p className="text-[90px] font-khula l">Yekini</p>
            <p className="text-[20px] mb-20"> Data System Developer || Data Analyst || Aspiring Full Stack Developer</p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap mb-10 md:m-0 gap-5 items-center justify-center w-full">
            {/* <button
              type="button"
              title="Al-Yeqeen Apps"
              className="border-3 p-4 text-[18px] mt-10 w-full rounded-md transform duration-200 hover:scale-110 font-bold"
            >
              Al-Yeqeen Apps
            </button> */}
            <button
              type="button"
              title="Al-Yeqeen Apps"
              className="border-3 p-4 text-[18px] mt-10 w-full rounded-md transform duration-200 hover:scale-110 font-bold"
              onClick={() => {
                document.getElementById("workexperience")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Work Experience
            </button>
          </div>
        </div>

        {/* left div */}
        <div className="flex flex-col gap-10 w-[50%] items-center justify-center">
          <div className="rounded-full h-[380px] w-[280px] xl:w-[490px] xl:h-[580px] flex items-center justify-center">
            <Image
              src="/alyeqeenImage.png"
              alt="Suhud Image"
              width={810}
              height={810}
              className="rounded-full bottom-6 max-w-full max-h-full object-cover saturate-99 contrast-95 brightness-100"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-5 p-4 font-bold w-full">
              {/* <button type="button" title="Contact Me" className={imageButtonStyling}>
                Contact Me
              </button> */}
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
            </div>
            <div className="flex flex-row gap-5 justify-center items-center bg-white rounded-md p-4  transform duration-200 hover:scale-110">
              <a href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories" target="_blank">
                <FaGithub className="size-12 text-github  transform duration-200 hover:scale-110" />
              </a>
              <a href="https://wa.me/447840262030" target="_blank">
                <FaWhatsapp className="size-12 text-whatsapp  transform duration-200 hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/suhud-yekini-a78330234/" target="_blank">
                <FaLinkedinIn className="size-12 text-linkedin  transform duration-200 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
