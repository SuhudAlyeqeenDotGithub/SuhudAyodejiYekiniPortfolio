import ProjectCard from "./ProjectCard";
import {
  ReactIcon,
  TailwindIcon,
  NodeJsIcon,
  MongoDbIcon,
  ReduxToolkitIcon,
  MongooseIcon,
  NextJsIcon,
  HtmlIcon,
  CssIcon,
  ExpressIcon,
  TypeScriptIcon,
  GitIcon,
  JavascriptIcon
} from "./TechIcon";

const Projects = () => {
  const projectsDetails = [
    {
      title: "Al-Yeqeen Task Tracker",
      description:
        "A task management app that provides a comprehensive and intuitive interface, allowing users to efficiently organize and track their workflow by offering a clear breakdown of tasks, including completed, in-progress, and terminated tasks, all at a glance.",
      imageSrc: "/alyeqeentasktrackerimage.png",
      pageLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/Al-Yeqeen-Task-Tracker-App",
      techStack: (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <JavascriptIcon />
          <ReactIcon /> <ReduxToolkitIcon />
          <NodeJsIcon /> <ExpressIcon />
          <MongoDbIcon />
          <MongooseIcon />
          <HtmlIcon />
          <CssIcon />
          <TailwindIcon />
          <GitIcon />
        </div>
      ),
      compStatus: "90%"
    },

    {
      title: "Al-Yeqeen Portfolio",
      description:
        "A personal portfolio that highlights my professional experience, educational background, and a showcase of projects, demonstrating my skills and expertise through detailed examples of my work and achievements.",
      imageSrc: "/portfolioimage.png",
      pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      techStack: (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <JavascriptIcon />
          <TypeScriptIcon />
          <ReactIcon />
          <NodeJsIcon />
          <NextJsIcon />
          <TailwindIcon />
          <CssIcon />
          <HtmlIcon />
          <GitIcon />
        </div>
      ),
      compStatus: "98%"
    }
    // {
    //   title: "Al-Yeqeen SmartTasks",
    //   description:
    //     "An AI-powered task management app that transforms natural language project descriptions into structured tasks, automating planning and boosting productivity with AI insights, collaboration tools, and gamification.",
    //   imageSrc: "/alyeqeentasktrackerimage.png",
    //   pageLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
    //   gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/Al-Yeqeen-Task-Tracker-App",
    //   techStack: "JavaScript, React, TailwindCSS, Node.js, Express, MongoDB, Mongoose, Redux Toolkit",
    //   compStatus: "20%"
    // },

    // {
    //   title: "Al-Yeqeen Uplift",
    //   description:
    //     "Uplift is a personalized affirmation app that generates AI-powered motivation tailored to users’ values, goals, and preferences, with customizable reminders and privacy-focused features.",
    //   imageSrc: "/portfolioimage.png",
    //   pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/",
    //   gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
    //   techStack: "JavaScript, React, Next.js, TailwindCSS, Node.js",
    //   compStatus: "20%"
    // }
  ];
  return (
    <div className="flex flex-col justify-center pt-30 pb-10 px-10 gap-20 items-center bg-[#b7dbd2]">
      <div id="projects" className="text-white flex flex-wrap gap-10 justify-center items-center">
        {projectsDetails.map(({ title, description, imageSrc, pageLink, gitHubLink, techStack, compStatus }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            imageSrc={imageSrc}
            pageLink={pageLink}
            gitHubLink={gitHubLink}
            techStack={techStack}
            compStatus={compStatus}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center w-full">
        <button
          className="whitespace-nowrap border-2 border-darkBlue2 text-darkBlue2 shadow-m w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-[#a8cec4]"
          onClick={() => {
            document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let&apos;s Collaborate
        </button>
        <button
          className="whitespace-nowrap shadow-m text-white bg-darkBlue3 w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-darkBlue1/90 "
          onClick={() => {
            document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Send me Feedback
        </button>
      </div>
    </div>
  );
};

export default Projects;
