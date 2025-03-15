import React, { useState, useRef } from "react";
import Image from "next/image";

function AIAssistant() {
  const apiKey = process.env.OPENAI_API_KEY; // Replace with your OpenAI API key
  const fetchData = async () => {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }]
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    setResponse(result.choices[0].message.content);
  };
  const [response, setResponse] = useState("");
  const [userInput, setUserInput] = useState("");
  const [openChat, setOpenChat] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const textAreaInput = useRef<HTMLTextAreaElement>(null);
  const [theme, setTheme] = useState("white");

  const handleTextAreaInput = () => {
    if (textAreaInput.current) {
      const textArea = textAreaInput.current;
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };

  const messageStlye = `${
    hideMessage ? "hidden" : ""
  } text-darkBlue3 flex flex-col gap-5 w-2/3 p-4 rounded-md bg-[#F5F5DC] font-bold animate-bounce [animation-duration:_1s]`;

  const imageOptions = (
    <div className="bg-darkBlue3 p-4 rounded-md text-white flex justify-center items-center gap-2 absolute z-40 right-27 bottom-10">
      <ul className="flex flex-col gap-2">
        <li
          onClick={() => setOpenChat(true)}
          className="whitespace-nowrap transform duration-200 hover:scale-110 cursor-pointer"
        >
          Open Chat
        </li>
        <li
          onClick={() => setHideMessage(!hideMessage)}
          className="whitespace-nowrap transform duration-200 hover:scale-110 cursor-pointer"
        >
          {hideMessage ? "Show" : "Hide"} Message
        </li>
        <li
          onClick={() => setHideImage(true)}
          className="whitespace-nowrap transform duration-200 hover:scale-110 cursor-pointer"
        >
          Hide Avatar
        </li>
      </ul>
    </div>
  );

  const showChatBtn = (
    <button
      onClick={() => setOpenChat(true)}
      className="whitespace-nowrap bg-red-500 p-4 rotate-90 h-[50px] text-[18px] text-white rounded-b-md fixed bottom-[50%] left-[95%] z-50 font-bold hover:cursor-pointer animate-pulse"
    >
      Let&apos;s Chat
    </button>
  );
  const popUpPrompt = (
    <div
      className={`${
        hideImage || openChat ? "hidden" : ""
      } flex items-center justify-end gap-1 absolute top-[70%] mt-10`}
    >
      <div className={messageStlye} onClick={() => setOpenChat(true)}>
        <p>
          <span className="text-amber-600 text-[20px]">Hi</span> Suhud put me here to help with your enquires....
        </p>
        <button
          onClick={() => setOpenChat(true)}
          className="bg-amber-500 p-2 rounded-md hover:bg-amber-600 hover:cursor-pointer"
        >
          Open Chat
        </button>
      </div>
      <div onMouseEnter={() => setImageHovered(true)} onMouseLeave={() => setImageHovered(false)} className="relative">
        {imageHovered && imageOptions}
        <div
          onClick={() => setOpenChat(true)}
          className="relative w-[106px] h-[103px] flex items-center justify-center shadow-lg hover:scale-110 transform duration-300 rounded-full hover:cursor-pointer"
        >
          {/* Spinning Outer Circle */}
          <div className="absolute h-[106px] w-[106px] bg-amber-500 border-t-8 border-darkBlue2 rounded-full animate-spin"></div>

          {/* Centered Inner Circle */}
          <div className="absolute h-[100px] w-[100px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <Image
              src="/alyeqeenImage.png"
              alt="AI Assistant"
              width={100}
              height={100}
              className="rounded-full object-cover border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const chatDialog = (
    <div
      className={`${
        theme === "darkBlue"
          ? "bg-darkBlue3 text-white"
          : theme === "amber"
          ? "bg-amber-300 text-darkBlue3"
          : theme === "teal"
          ? "bg-teal-900 text-white"
          : "bg-white text-darkBlue3"
      } rounded-xl max-h-[700px] shadow-lg gap-2 pt-4 flex flex-col items-center justify-between`}
    >
      <div className="flex items-center justify-between w-full px-5">
        <h1 className="text-[25px] font-extrabold">Suhud's Assistant</h1>
        <button
          title="Close Chat"
          onClick={() => setOpenChat(false)}
          className="cursor-pointer hover:bg-red-700 bg-red-600 text-white h-[30px] w-[35px] p-1 text-lg  rounded-full font-extrabold font-nunito flex justify-center items-center"
        >
          X
        </button>
      </div>

      <div className="p-4 flex-col flex gap-5 overflow-auto">
        <p
          className={`${
            theme === "darkBlue"
              ? "bg-white/20 text-white"
              : theme === "amber"
              ? "bg-amber-200 text-darkBlue3"
              : theme === "teal"
              ? "bg-white/20 text-white"
              : "bg-themeTealLight/40 text-darkBlue3"
          } p-2 rounded-md`}
        >
          {response}As of my latest information, Suhud Ayodeji Yekini does not appear to be a widely known or public
          figure in mainstream media, politics, or other major fields. It's possible that they may be a private
          individual, a professional in a specific industry, or an emerging figure whose information hasn't been
          extensively covered. If you have a specific context (such as their field of work or location), I can help you
          search for more detailed information. Would you like me to look into it further?
        </p>
        <p
          className={`${
            theme === "darkBlue"
              ? "text-white"
              : theme === "amber"
              ? "text-darkBlue3"
              : theme === "teal"
              ? "text-white"
              : "text-darkBlue3"
          } p-2 rounded-md`}
        >
          {response}As of my latest information, Suhud Ayodeji Yekini does not appear to be a widely known or public
          figure in mainstream media, politics, or other major fields. It's possible that they may be a private
          individual, a professional in a specific industry, or an emerging figure whose information hasn't been
          extensively covered. If you have a specific context (such as their field of work or location), I can help you
          search for more detailed information. Would you like me to look into it further?
        </p>
      </div>
      <div className="w-full p-4 flex flex-col gap-3 justify-center">
        <textarea
          className={`${
            theme === "darkBlue"
              ? "bg-white text-darkBlue3"
              : theme === "amber"
              ? "bg-white text-darkBlue3"
              : theme === "teal"
              ? "bg-white text-darkBlue3"
              : "bg-white text-darkBlue3 border border-[#2f6558] "
          } resize-none placeholder-darkBlue3/60 min-h-[100px] w-full max-h-[150px] shadow-md bg-[#b7dbd2]/10 rounded-xl p-4 outline-hidden overflow-auto`}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onInput={handleTextAreaInput}
          ref={textAreaInput}
          placeholder="Ask about Suhud..."
        />
        <div className="flex flex-row gap-5 justify-between items-center px-5">
          <button
            className={`${
              theme === "darkBlue"
                ? "bg-white text-darkBlue3 hover:bg-amber-100"
                : theme === "amber"
                ? "bg-darkBlue3 text-white hover:bg-darkBlue1"
                : theme === "teal"
                ? "bg-white text-darkBlue3 hover:bg-amber-100"
                : "bg-darkBlue3 text-white hover:bg-darkBlue1"
            } w-1/2 shadow-md rounded-full p-2 cursor-pointer font-bold`}
            onClick={fetchData}
          >
            Ask
          </button>
          <div className="flex flex-col justify-center items-center font-bold">
            Change Themes
            <div className="flex flex-row gap-1">
              <div
                title="Dark Blue"
                onClick={() => setTheme("darkBlue")}
                className="cursor-pointer h-[20px] w-[20px] rounded-full bg-darkBlue3"
              ></div>
              <div
                title="Teal"
                onClick={() => setTheme("teal")}
                className="cursor-pointer h-[20px] w-[20px] rounded-full bg-teal-900"
              ></div>
              <div
                title="Amber"
                onClick={() => setTheme("amber")}
                className="cursor-pointer h-[20px] w-[20px] rounded-full bg-amber-300"
              ></div>
              <div
                title="White"
                onClick={() => setTheme("white")}
                className="cursor-pointer h-[20px] w-[20px] rounded-full bg-white"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      {hideImage && !openChat && showChatBtn}
      <div className="flex flex-col w-[400px] gap-3 fixed bottom-5 top-5 right-4 z-4">
        {openChat && chatDialog}
        {!hideImage && popUpPrompt}
      </div>
    </div>
  );
}

export default AIAssistant;
