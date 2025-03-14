import React, { useState } from "react";
import AccordionContainer from "./AccordionContainer";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex((openIndex) => (openIndex === index ? null : index));
  };
  const titles = [
    "Spreadsheets (Excel & Google Sheets)",
    "HTML & CSS",
    "Java",
    "SQL",
    "AppScript & JavaScript",
    "React.js & Tailwind CSS",
    "Node.js, Express & JWT (Backend Development)",
    "MongoDB & Mongoose (NoSQL)",
    "Redux & Redux Toolkit",
    "Next.js & TypeScript",
    "OpenAI API, Next.js SDK & Other Tools"
  ];

  const descriptions = [
    "I began working with spreadsheets in college and expanded my expertise by building advanced projects, including dynamic dashboards for deep data analysis and optimizing user interfaces for a better experience.",
    "I developed a solid foundation in HTML and CSS through college projects, the most notable being an e-commerce website. Though static, it allowed me to master structuring and styling professional web pages.",
    "My programming journey started with Java, where I built a strong foundation in object-oriented programming, functional programming, exception handling, CRUD operations, and data structures & algorithms. I deepened my knowledge through courses and hands-on projects.",
    "Alongside Java, I studied SQL, learning relational database concepts, querying, and data management, which I later applied in various projects.",
    "While working on data automation in Google Sheets, I explored Google Apps Script, which introduced me to JavaScript. I later dedicated time to mastering JavaScript by studying its core principles and applying them in real-world projects.",
    "I quickly picked up React.js, building interactive UIs, with my first major project being Al-Yeqeen Task Tracker. Tailwind CSS became my go-to for styling, allowing me to create clean, responsive designs efficiently.",
    "To become a full-stack developer, I learned Node.js, Express, and JWT for backend development. I built APIs, authentication systems, and integrated them into my projects, strengthening my server-side programming skills.",
    "I implemented MongoDB with Mongoose in Al-Yeqeen Task Tracker, learning database modeling, CRUD operations, and efficient data management.",
    "After learning useContext, I explored Redux for global state management. I implemented Redux Toolkit in Al-Yeqeen Task Tracker, leveraging reducers, middleware, and Redux Thunk for efficient asynchronous state handling, improving performance and scalability.",
    "I expanded my React skills with Next.js and TypeScript, using static typing to improve code reliability. My personal website is built with these technologies.",
    "I'm currently exploring AI integration with OpenAI’s API using Next.js, focusing on implementing chatbots and AI-driven features in my applications. Additionally, I have worked with various tools and libraries such as Chart.js for data visualization, React packages for UI optimization, and custom fonts to enhance design and readability."
  ];

  const titleStyle = "font-bold text-lg flex items-center justify-between w-full gap-5 bg-gray-900 rounded text-white p-2";
  const descriptionStyle = "flex items-center font-bold w-full mt-2 px-2 text-darkBlue3";

  return (
    <div>
      <AccordionContainer styling="flex flex-col justify-center w-full">
        {titles.map((item, index) => (
          <AccordionItem
            key={index}
            title={titles[index]}
            content={descriptions[index]}
            titleStyle={titleStyle}
            contentStyle={descriptionStyle}
            isOpen={openIndex === index}
            onToggle={() => {
              handleToggle(index);
            }}
            borderBottom=""
            borderLeft=""
          />
        ))}
      </AccordionContainer>
    </div>
  );
}

export default Accordion;
