"use client";
import { useState } from "react";

const HomeSection3 = () => {
  const [activeButton, setActiveButton] = useState("Software Projects");
  const buttonStyling = `shadow-md border-2 border-darkBlue2 p-4 text-darkBlue2 rounded-md font-bold transform duration-300 hover:scale-110`;
  const activeBtnSyling = "bg-[#425559] text-white border-none";
  const jobRoles = ["Software Projects", "Data Excecutive & Systems Developer"];
  const divCardStyle =
    "bg-white/95 text-darkBlue2 p-8 rounded-md w-full min-w-[300px] transform duration-300 hover:scale-105";

  const taskTracker = (
    <a
      href="https://github.com/SuhudAlyeqeenDotGithub/Al-Yeqeen-Task-Tracker-App"
      target="_blank"
      className="bg-white/9 p-1 rounded-md font-bold"
    >
      Al-Yeqeen Task Tracker
    </a>
  );
  const softwareProjects = (
    <ul className="list-disc list-inside flex flex-col gap-5">
      <li>
        Engineered a full-stack web app, {taskTracker}, integrating secure authentication, data protection, and a
        responsive task management interface with real-time insights from the dashboard, leveraging React.js, Node.js,
        Express.js, MongoDB, Redux etc., to ensure scalability, efficiency, and a seamless user experience.
      </li>
      <li>
        Spearheaded the design and development of this website, establishing a centralized platform to showcase my work
        and applications, leveraging Next.js and TypeScript to enhance performance, scalability, and maintainability,
        resulting in an 80% increase in online presence and engagement.
      </li>
    </ul>
  );
  const dataExcecutiveProjects = (
    <ul className="list-disc list-inside flex flex-col gap-5">
      <li>
        Using advanced spreadsheet functions and tools, I spearheaded the rearchitecting and development of data systems
        including HR employee case tracking system and interactive dashboards that provided the CEO and Managing
        Directors with real-time insights into client service ratings, company culture, diversity, and employee
        training.
      </li>
      <li>
        Increased data analysis efficiency by 80%, cut retrieval times ninefold, and reduced manual data entry by 45%,
        enabling faster decision-making and improving overall reporting accuracy.
      </li>
      <li>
        Using JavaScript and Google Apps Script, I engineered a data system to analyse Infogrid toilet sensor data,
        compensating for missing data points and creating predictive models for future visits, optimising service
        delivery and resource allocation by 30%, and boosted client satisfaction by 55%.
      </li>
      <li>
        Designed and implemented a JavaScript Apps Script algorithm in 2 hours to rapidly retrieve folder and file
        ownership data from the company&apos;s Google Drive, saving 4 days of manual retrieval.
      </li>
      <li>
        Contributed to overseeing data and content management within the company&apos;s new CMS (PCS) using Firefoo,
        enhancing client relationships and improving manager collaboration by 86%.
      </li>
    </ul>
  );

  const contentToDisplay = activeButton === "Software Projects" ? softwareProjects : dataExcecutiveProjects;
  return (
    <div className="text-darkBlue2 font-bold bg-[#b7dbd2] flex flex-wrap md:flex-col md:px-40 justify-between gap-5">
      <div className="flex flex-col items-center justify-center w-full gap-25 p-5 ">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 mt-40">
          <div className={divCardStyle}>
            <h1 id="skills" className="font-extrabold text-[30px] mb-5 text-center">
              Skills
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>
                <b>Development:</b> JavaScript, Node.js, React.js, Next.js, TypeScript, Express.js, HTML, CSS, Redux,
                Git, Tailwind CSS, AppScript, SQL, NoSQL, MongoDB, Mongoose, Axios, Java, Python, Tkinter, JWT(Json Web
                Token) Authentication.
              </li>
              <li>
                <b>Techniques:</b> Data Structure & Algorithm, Object Oriented Programming, CRUD, MERN, Bcrypt,
                Microsoft Excel, VBA.
              </li>
              <li>
                <b>Others:</b> UI/UX, Responsive Design, Trello, Figma, Lucid Charts, Canva, Google Sheets, Microsoft
                Access.
              </li>
            </ul>
          </div>
          <div className={divCardStyle}>
            <h1 id="education" className="font-extrabold text-[30px] text-center mb-5 text">
              Education
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>
                BTEC Level 3 National Extended Diploma in Information Technology (Grade **D) - Sep 2022 - Jul 2024{" "}
              </li>
              <li>GCSE Mathematic (Grade: 5) - Aug 2022</li>
              <li>GCSE English (Grade: 6) - Aug 2022</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center w-full">
          <button
            title="Al-Yeqeen Apps"
            className="cursor-pointer whitespace-nowrap shadow-m bg-amber-500 w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-amber-400"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Al-Yeqeen Apps
          </button>
          <button
            title="Email Me"
            className="animate-ease-out [animation-duration:_2s] cursor-pointer whitespace-nowrap hadow-m text-white bg-darkBlue2 w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-darkBlue3 "
            onClick={() => {
              document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Email Me
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col mt-10 p-8 gap-10 text-lg items-center">
        <h1 id="workexperience" className="font-extrabold text-[40px] text-center">
          Work Experience
        </h1>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {jobRoles.map((role, index) => (
            <button
              key={index}
              type="button"
              title={role}
              className={`${buttonStyling} ${activeButton === role ? activeBtnSyling : ""}`}
              onClick={() => setActiveButton(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="p-4">{contentToDisplay}</div>
      </div>
    </div>
  );
};

export default HomeSection3;
