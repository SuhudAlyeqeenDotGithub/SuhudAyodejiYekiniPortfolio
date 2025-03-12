"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  pageLink: string;
  gitHubLink: string;
  techStack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, pageLink, gitHubLink, techStack }) => {
  const btnStyle = "border-2 p-2 rounded-md transform duration-200 hover:pointer-cursor hover:scale-105";

  return (
    <div className="w-[450px] shadow-md rounded-lg p-2 text-white font-semibold transform duration-200 hover:scale-105">
      <a href={pageLink} target="_blank" rel="noopener noreferrer">
        <Image src={imageSrc} alt={title} width={500} height={500} className="object-cover" />
      </a>
      <div className="p-4 flex flex-col gap-5 h-3/5">
        <h1 className="text-[20px] mt-5 font-bold">{title}</h1>
        <p>{description}</p>
        <p className="border-t-2 p-4 bg-blue-950/50">
          <span className="font-bold">Tech Stack:</span> {techStack}
        </p>

        <div className="flex flex-col md:flex-nowrap gap-10 mt-5 mb-2 items-center px-10">
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub title="Link to Github" className="text-[45px] transform duration-200 hover:scale-110" />
          </a>
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
