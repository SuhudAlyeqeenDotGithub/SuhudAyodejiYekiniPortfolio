"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  pageLink: string;
  gitHubLink: string;
  techStack: React.ReactNode;
  compStatus: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  pageLink,
  gitHubLink,
  techStack,
  compStatus
}) => {
  const btnStyle =
    "whitespace-nowrap p-4 font-bold rounded-md transform bg-darkBlue3 text-white duration-200 hover:cursor-pointer hover:scale-105";

  return (
    <div className="md:w-[500px] md:h-[900px] shadow-md rounded-lg border border-[#98beb5] bg-white/90 text-darkBlue3 font-semibold transform duration-200 hover:scale-103">
      <div className="p-4 flex flex-col gap-10 bg-center bg-cover">
        <div className="p-4 flex flex-col gap-10 rounded-md">
          <div className="flex flex-col gap-5">
            <div className="flex text-[30px] justify-between items-center">
              <h1 className="font-extrabold">{title}</h1>
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub title="Link to Github" className="text-[55px] transform duration-200 hover:scale-110" />
              </a>
            </div>

            <p>{description}</p>
          </div>

          <div className="flex flex-col gap-5 mt-5">{techStack}</div>
          <div className="font-bold flex flex-col gap-2 mt-5">
            <p>Project Completion</p>
            <div className="bg-amber-500 w-full h-[20px] flex rounded-lg text-white">
              <div
                className="bg-darkBlue3 h-[20px] justify-center flex rounded-l-md"
                style={{ width: `${parseInt(compStatus) || 0}%` }} // Ensure it's a number
              >
                {compStatus}
              </div>
              <div
                className="h-[20px] rounded-r-md" // Gray to visualize if it's rendering
                style={{ width: `${100 - (parseInt(compStatus) || 0)}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-nowrap gap-10 mt-5 mb-2 items-center px-10">
          <a href={pageLink} target="_blank" rel="noopener noreferrer">
            <button className={btnStyle} title={`Vists ${title}`}>
              Visit {title}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
