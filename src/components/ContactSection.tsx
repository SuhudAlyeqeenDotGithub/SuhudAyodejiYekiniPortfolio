"use client";
import { useState } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  interface FormData {
    name: string;
    senderEmail: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({ name: "", senderEmail: "", message: "" });
  const { name, senderEmail, message } = formData;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev: FormData) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const inputStyling = "text-blue-900 placeholder-blue-900 rounded bg-white p-4 w-full outline-hidden";

  return (
    <div className="bg-blue-800 text-white font-bold flex flex-wrap md:flex-col p-5 md:p-20 justify-between">
      <div className="flex flex-col md:gap-20 mt-20">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 id="contactme" className="font-extrabold text-[40px] text-center mb-10">
            Contact Me
          </h1>
          <form className="w-full md:w-1/2 flex flex-col gap-3 items-center justify-center">
            <input
              className={inputStyling}
              placeholder="Name"
              type="text"
              name={"name"}
              value={name}
              onChange={handleInput}
            />
            <input
              className={inputStyling}
              placeholder="Email *"
              type="text"
              name={"senderEmail"}
              value={senderEmail}
              onChange={handleInput}
            />
            <textarea
              className={inputStyling}
              placeholder="Message *"
              name={"message"}
              value={message}
              onChange={handleInput}
            />
            <button
              type="submit"
              className="border-3 font-extrabold text-lg mt-5 rounded transform duration-100 w-1/3 p-4 hover:scale-105"
              title="Submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 id="contactme" className="font-extrabold text-[40px] text-center mb-10">
            Click Me
          </h1>
          <div className="w-full md:w-1/2 flex p-10 flex-row gap-5 justify-center items-center bg-white rounded h-1/3">
            <a href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories" target="_blank">
              <FaGithub className="size-16 text-github  transform duration-200 hover:scale-110" />
            </a>
            <a href="https://wa.me/447840262030" target="_blank">
              <FaWhatsapp className="size-16 text-whatsapp  transform duration-200 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/suhud-yekini-a78330234/" target="_blank">
              <FaLinkedinIn className="size-16 text-linkedin  transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
