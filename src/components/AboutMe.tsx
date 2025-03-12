"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const HomeSection2 = () => {
  const [devJournyIsActive, setDevJournyIsActive] = useState(false);
  const buttonStyling = `border-2 shadow-md border-blue-800 p-2 rounded-md font-bold transform duration-100 hover:scale-95`;
  const otherProjects = (
    <a
      href="#alyeqeenApps"
      title="Al-Yeqeen Apps"
      className="font-bold bg-white/9 rounded-md p-1 hover:bg-darkBlue1/60"
      target="_blank"
    >
      other projects
    </a>
  );

  const principleWebsite = (
    <a
      href="https://principleclean.com/"
      title="Principle Cleaning Services"
      className="font-bold bg-white/9 rounded-md p-1 hover:bg-darkBlue1/60"
      target="_blank"
    >
      Principle Cleaning Services
    </a>
  );

  const resume = (
    <div className="w-full h-full">
      <iframe src="/suhudayodejiyekinicv.pdf" width="100%" height="900px"></iframe>
    </div>
  );
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-15 mt-10  px-10 text-white">
      {/* left div */}
      <div className="w-full  font-semibold text-xl flex flex-col py-20">
        <h1 id="aboutme" className="mt-24 mb-10 font-extrabold text-[40px] text-center">
          About Me
        </h1>

        <div className="flex flex-col gap-5">
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
            Building this website and {otherProjects} has been integral to my growth as a software engineer. I am driven
            by the challenge of expressing my creativity, solving problems, and building solutions that truly make a
            difference. Software development is my craft, my passion, and the way I bring ideas to life.
          </p>
        </div>
      </div>
      {/* right div */}
      <div className="flex flex-col gap-y-10 bg-white text-blue-900 justify-center items-center p-8 rounded-2xl md:w-1/2 min-h-[600px]">
        {/* top div */}
        <div id="devjourney" className="flex justify-center items-center gap-6">
          <button
            type="button"
            title="Development Journey"
            className={`${buttonStyling} ${devJournyIsActive ? "bg-blue-900 text-white" : ""}`}
            onClick={() => setDevJournyIsActive(!devJournyIsActive)}
          >
            Development Journey
          </button>
          <button
            type="button"
            title="Skills & Technology"
            className={`${buttonStyling} ${!devJournyIsActive ? "bg-blue-900 text-white" : ""}`}
            onClick={() => setDevJournyIsActive(!devJournyIsActive)}
          >
            CV / Resume
          </button>
        </div>

        {devJournyIsActive ? <Accordion /> : resume}
      </div>
    </div>
  );
};

export default HomeSection2;
