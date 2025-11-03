import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import dotenv from "dotenv";

dotenv.config();
import responseInfo from "./ResponseInformation";

function AIAssistant() {
  const [userInput, setUserInput] = useState("");
  const [openChat, setOpenChat] = useState(false);
  const textAreaInput = useRef<HTMLTextAreaElement>(null);
  const [minimizeChat, setMinimizeChat] = useState(true);
  const [fetchingResponse, setFetchingResponse] = useState(false);

  const [conversationArray, setConversationArray] = useState<[string, string][]>([
    ["", "Welcome, what do you want to know about Suhud?"]
  ]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [conversationArray]);

  const handleConversation = (userInput: string, response: string): [string, string][] => {
    return [...conversationArray, [userInput, response] as [string, string]];
  };

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const fetchData = async () => {
    setFetchingResponse(true);
    setUserInput("");
    try {
      const data = {
        model: "gpt-4o-mini",
        messages: [
          { role: "developer", content: responseInfo },
          { role: "user", content: userInput }
        ]
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
      setFetchingResponse(false);

      setConversationArray(handleConversation(userInput, result.choices[0].message.content));
    } catch (error) {
      handleConversation(userInput, error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const handleTextAreaInput = () => {
    if (textAreaInput.current) {
      const textArea = textAreaInput.current;
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && userInput !== "") {
      e.preventDefault(); // Prevent new line in textarea

      fetchData();
    }
  };

  const popUpPrompt = (
    <div
      className={`${
        openChat ? "hidden" : ""
      } flex items-center justify-end gap-1 md:h-[150px] md:w-[400px] w-[300px] fixed top-[40%] right-0 z-30 cursor-pointer pr-1`}
    >
      <div className="relative">
        <div
          onClick={() => setOpenChat(true)}
          className="relative w-[106px] h-[103px] flex items-center justify-center hover:scale-110 transform duration-300 hover:cursor-pointer animate-bounce"
        >
          {/* Spinning Outer Circle */}
          <div className="absolute md:h-[106px] md:w-[106px] h-[70px] w-[70px] border-4 border-b-slate-900 border-r-amber-500 border-t-[#0097a7] rounded-full animate-spin"></div>

          {/* Centered Inner Circle */}
          <div className="md:h-[100px] md:w-[100px] h-[60px] w-[60px] rounded-full flex items-center">
            <Image
              src="/suhudimage.jpeg"
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
      className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border dark:border-gray-500 transition-colors rounded-xl ${
        minimizeChat
          ? "lg:h-[80%] lg:w-[25%] md:h-[70%] md:w-[25%] h-[80%] w-[80%] "
          : "md:h-[80%] md:w-[80%] h-[80%] w-[80%]"
      } shadow-lg gap-2 pt-4 flex flex-col items-center justify-between fixed top-[10%] md:right-8 right-5 z-50`}
    >
      <div className="flex items-center justify-between w-full px-5">
        <h1 className="text-[25px] font-extrabold">Suhud&apos;s Assistant</h1>
        <div className="flex flex-row gap-3">
          {minimizeChat ? (
            <FiMaximize2
              title="Maximize Chat"
              onClick={() => setMinimizeChat(false)}
              className="cursor-pointer hover:bg-gray-200 hover:text-darkBlue3 h-[30px] w-[35px] p-1 text-lg rounded-full font-extrabold font-nunito flex justify-center items-center"
            />
          ) : (
            <FiMinimize2
              title="Minimize Chat"
              onClick={() => setMinimizeChat(true)}
              className="cursor-pointer hover:bg-gray-200 hover:text-darkBlue3 h-[30px] w-[35px] p-1 text-lg rounded-full font-extrabold font-nunito flex justify-center items-center"
            />
          )}

          <IoCloseSharp
            title="Close Chat"
            onClick={() => setOpenChat(false)}
            className="cursor-pointer hover:bg-red-600 hover:text-white h-[30px] w-[35px] p-1 text-lg rounded-full font-extrabold font-nunito flex justify-center items-center"
          />
        </div>
      </div>

      <div ref={divRef} className="p-4 flex-col flex gap-8 overflow-auto w-full h-[100%]">
        {conversationArray.map(([prompt, response], index) => (
          <div key={index} className="flex-col flex gap-5 w-full">
            {prompt !== "" && (
              <div className="flex justify-end flex-col w-full gap-4">
                <div className="flex flex-row items-center justify-end gap-2 font-bold ">
                  <div className="">You</div>
                  <div className="h-[20px] w-[20px] bg-[#0097a7]/20 rounded-full shadow-md p-4 flex items-center justify-center text-lg font-bold">
                    <p className="mt-1">Y</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className={`bg-[#0097a7]/10 p-2 rounded-md ]`}>
                    <p>{prompt}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-start w-full gap-3">
              <div className="flex flex-row items-center justify-start gap-2 font-bold ">
                <Image
                  src="/suhudimage.jpeg"
                  alt="AI Assistant"
                  width={200}
                  height={200}
                  className="rounded-full h-[35px] w-[35px] object-cover shadow-md bg-amber-200"
                />
                <p className="">Suhud&apos;s Assistant</p>
              </div>
              <div className={`p-2 rounded-md`}>
                <p>{response}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full p-4 flex flex-col gap-3 justify-center">
        {fetchingResponse && (
          <div className="animate-pulse bg-gray-300 rounded-md p-2 text-darkBlue3 flex gap-5 items-center justify-center font-bold">
            Fetching Response about Suhud......
            <div className="w-6 h-6 border-4 border-r-amber-500 border-t-darkBlue2 border-l-cyan-500 rounded-full animate-spin"></div>
          </div>
        )}
        <textarea
          className={`resize-none placeholder-darkBlue3/60 min-h-[100px] w-full max-h-[150px] shadow-md bg-[#0097a7]/10 border border-[#0097a7]/20 rounded-xl p-4 outline-hidden overflow-auto`}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onInput={handleTextAreaInput}
          onKeyDown={handleKeyDown}
          ref={textAreaInput}
          placeholder="Ask about Suhud..."
        />
        <div className="flex flex-row gap-5 justify-between items-center px-5">
          <button
            title="Ask"
            disabled={userInput === ""}
            className={`bg-[#0097a7] text-white hover:bg-[#0097a7]/80 shadow-md rounded-full ${
              minimizeChat ? "w-1/2" : "text-[17px] w-1/3"
            } p-2 cursor-pointer font-bold disabled:cursor-not-allowed`}
            onClick={fetchData}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {openChat && chatDialog}
      {popUpPrompt}
    </div>
  );
}

export default AIAssistant;
