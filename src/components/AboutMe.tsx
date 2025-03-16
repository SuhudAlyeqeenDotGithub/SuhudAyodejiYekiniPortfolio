"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const HomeSection2 = () => {
  const [devJournyIsActive, setDevJournyIsActive] = useState(true);

  const otherProjects = (
    <a href="#projects" title="Al-Yeqeen Apps" className="font-bold underline" target="_blank">
      other projects
    </a>
  );

  const principleWebsite = (
    <a
      href="https://principleclean.com/"
      title="Principle Cleaning Services"
      className="font-bold underline"
      target="_blank"
    >
      Principle Cleaning Services
    </a>
  );

  const resume = (
    <div className="w-full h-full">
      <a href="/suhudayodejiyekinicv.pdf" target="_blank" rel="noopener noreferrer" className="font-bold m-10">
        Open on new tab
      </a>
      <iframe src="/suhudayodejiyekinicv.pdf" width="100%" height="900px"></iframe>
    </div>
  );
  return (
    <div className="flex flex-col bg-white py-10 md:pr-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-10 text-darkBlue3 font-bold">
        {/* left div */}
        <div className="w-full font-semibold text-xl flex flex-col px-10 py-10">
          <h1 id="aboutme" className="mt-24 mb-10 font-extrabold text-[40px] text-center">
            About Me
          </h1>

          <div className="flex flex-col gap-5 text-[18px]">
            <p>
              I am an aspiring Full Stack Software Engineer with a passion for creating impactful solutions and turning
              ideas into reality through software. With a background in data analysis, I have developed strong
              problem-solving and analytical skills, which seamlessly transfer to software development. I thrive in
              transforming ideas into functional, user-centered applications, using coding as a creative outlet. My
              analytical expertise enables me to build efficient, impactful solutions that drive real results.
            </p>

            <p>
              I currently work as a Data Analyst at {principleWebsite}, driving the development of data-driven systems
              that enhance decision-making and operational efficiency across multiple departments.
            </p>

            <p>
              My software development journey has empowered me to innovate, solve complex problems, and deliver seamless
              user experiences that create real impact. With a solid foundation in Information Technology, I am a
              self-taught developer committed to continuous learning. Over the last six months, I’ve mastered core
              software development principles and gained practical experience across both frontend and backend
              technologies.
            </p>

            <p>
              Building this website and {otherProjects} has been integral to my growth as a software engineer. I am
              driven by the challenge of expressing my creativity, solving problems, and building solutions that truly
              make a difference. Software development is my craft, my passion, and the way I bring ideas to life.
            </p>
          </div>
        </div>
        {/* right div */}
        <div className="flex flex-col gap-y-10 px-3 text-darkBlue1 center items-center rounded-2xl md:w-[700px] w-full min-h-[600px]">
          {/* top div */}
          <div id="devjourney" className="flex justify-center text-[18px] items-center gap-6">
            <button
              type="button"
              title="Development Journey"
              className="cursor-pointer p-2 font-bold transform duration-100 hover:scale-95 border-2 shadow-md bg-gray-100 outline-2 outline-amber-500"
              onClick={() => setDevJournyIsActive(true)}
            >
              Development Journey
            </button>
            <button
              type="button"
              title="Skills & Technology"
              className="cursor-pointer p-2 font-bold transform duration-100 hover:scale-95 border-2 shadow-md bg-gray-100 outline-2 outline-amber-500"
              onClick={() => setDevJournyIsActive(false)}
            >
              CV / Resume
            </button>
          </div>

          {devJournyIsActive ? <Accordion /> : resume}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center w-full px-4">
        <button
          className="cursor-pointer whitespace-nowrap shadow-m text-white bg-amber-500 w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-yellow-600"
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default HomeSection2;
