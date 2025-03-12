"use client";
import { useRef, useState } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  interface FormData {
    name: string;
    senderEmail: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({ name: "", senderEmail: "", message: "" });
  const { name, senderEmail, message } = formData;
  const textAreaInput = useRef<HTMLTextAreaElement>(null);
  const [responseFromBackEnd, setResponseFromBackEnd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextAreaInput = () => {
    if (textAreaInput.current) {
      const textArea = textAreaInput.current;
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev: FormData) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const inputStyling = "text-blue-900 placeholder-blue-500 text-lg rounded bg-white p-4 w-full outline-hidden";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contactsuhudayodejiyekini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setLoading(false);
        setResponseFromBackEnd(responseData.message);
        setFormData({ name: "", senderEmail: "", message: "" });
      } else {
        setLoading(false);
        setResponseFromBackEnd("Error sending email. Please try again later");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="text-white font-bold flex flex-wrap md:flex-col p-5 md:p-20 justify-between">
      <div className="flex flex-col md:gap-20 mt-20">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 id="contactme" className="font-extrabold text-[40px] text-center mb-10">
            Contact Me
          </h1>
          <form className="w-full md:w-1/2 flex flex-col gap-3" onSubmit={handleSubmit}>
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
              type="email"
              name={"senderEmail"}
              value={senderEmail}
              onChange={handleInput}
            />
            <div className="ml-3">
              {senderEmail === "" || !senderEmail.includes("@") || senderEmail.length < 2
                ? "Please enter a valid email"
                : ""}
            </div>
            <textarea
              onInput={handleTextAreaInput}
              ref={textAreaInput}
              className={`${inputStyling} overflow-hidden`}
              rows={4}
              placeholder="Message *"
              name={"message"}
              value={message}
              onChange={handleInput}
            />
            <div className="ml-3">{message === "" ? "Please enter a message" : ""}</div>
            <div className="flex flex-col items-center justify-center">
              <div className="ml-3 text-xl text-center">{responseFromBackEnd}</div>
              {loading && (
                <div className="flex flex-row gap-2 text-lg">
                  <div>Sending Email...</div>
                  <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!senderEmail || !message}
                className="disabled:bg-red-500/90 disabled:cursor-not-allowed border-3 font-extrabold text-lg mt-5 rounded-md transform duration-100 w-1/3 p-4 hover:scale-105"
                title="Submit"
              >
                Submit
              </button>
            </div>
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
