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
  JavascriptIcon,
  OpenAIIcon,
  VercelIcon,
  PostgreSQLIcon
} from "./TechIcon";

const Projects = () => {
  const projectsDetails = [
    {
      title: "Al-Yeqeen Task Tracker",
      description:
        "A task management app that provides a comprehensive and intuitive interface, allowing users to efficiently organize and track their workflow by offering a clear breakdown of tasks, including completed, in-progress, and terminated tasks, all at a glance.",

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
        "A personal portfolio showcasing my professional experience, education, and projects, highlighting my skills and achievements, while boosting online engagement by 90%",
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
      compStatus: "100%"
    },
    {
      title: "Al-Yeqeen Bot",
      description:
        "Al-Yeqeen Bot is an intelligent assistant that helps users quickly find information about me. It offers customizable features like language preferences, theme colors, and chat visibility, making the website 95% easier to explore.",
      imageSrc: "/alyqeen-bot-image.png", // Replace with actual bot image
      pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/", // Same portfolio link, or you can provide a separate one if needed
      gitHubLink:
        "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio/tree/master/src/components/Al_Yeqeen_Bot_Assistant", // Provide the GitHub link for the bot’s repository
      techStack: (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <JavascriptIcon />
          <TypeScriptIcon />
          <VercelIcon />
          <OpenAIIcon />
          <ReactIcon />
          <NextJsIcon />
          <TailwindIcon />
        </div>
      ),
      compStatus: "100%" // Adjust the completion status accordingly
    }
  ];

  const upcomingProjectsDetails = [
    {
      title: "Al-Yeqeen SmartTasks",
      description:
        "An AI-powered task management app that transforms natural language project descriptions into structured tasks, automating planning and boosting productivity with AI insights, collaboration tools, and gamification.",
      imageSrc: "/alyeqeentasktrackerimage.png",
      pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      techStack: (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <JavascriptIcon />
          <TypeScriptIcon />
          <VercelIcon />
          <OpenAIIcon />
          <ReactIcon />
          <NextJsIcon />
          <TailwindIcon />
        </div>
      ),
      compStatus: "20%"
    },

    {
      title: "Al-Yeqeen Uplift",
      description:
        "Uplift is a personalized affirmation app that generates AI-powered motivation tailored to users’ values, goals, and preferences, with customizable reminders and privacy-focused features.",
      imageSrc: "/portfolioimage.png",
      pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      techStack: (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <OpenAIIcon />
          <JavascriptIcon />
          <PostgreSQLIcon />
          <TypeScriptIcon />
          <NodeJsIcon /> <ExpressIcon />
          <MongoDbIcon />
          <MongooseIcon />
          <VercelIcon />
          <ReactIcon />
          <NextJsIcon />
          <TailwindIcon />
        </div>
      ),
      compStatus: "20%"
    }
  ];
  return (
    <div className="flex flex-col pt-30  justify-center items-center bg-[#b7dbd2]">
      <div className="flex flex-col justify-center pb-20 gap-20 items-center">
        <div id="projects" className="text-white flex flex-wrap gap-10 px-10 justify-center items-center">
          {projectsDetails.map(({ title, description, pageLink, gitHubLink, techStack, compStatus }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              pageLink={pageLink}
              gitHubLink={gitHubLink}
              techStack={techStack}
              compStatus={compStatus}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full">
          <button
            title="Let's Collaborate"
            className="cursor-pointer whitespace-nowrap text-white shadow-md md:w-[400px] text-[18px] p-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 font-extrabold transform duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&apos;s Collaborate
          </button>
          <button
            title="Send Feedback"
            className="cursor-pointer whitespace-nowrap shadow-m text-white bg-darkBlue3 md:w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 hover:bg-darkBlue2 "
            onClick={() => {
              document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Send me Feedback
          </button>
        </div>
      </div>
      <div className=" bg-blue-300/20 w-full py-10 flex flex-col gap-10">
        <div className="flex items-center justify-center w-full mt-5">
          <p
            title="Upcoming Projects"
            className=" border-b-4 border-darkBlue3 text-darkBlue3 text-center text-[40px] p-8 font-extrabold animate-bounce [animation-duration:_2s]"
          >
            Upcoming Projects
          </p>
        </div>
        <div className="text-white flex flex-wrap gap-10 justify-center items-center">
          {upcomingProjectsDetails.map(({ title, description, pageLink, gitHubLink, techStack, compStatus }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              pageLink={pageLink}
              gitHubLink={gitHubLink}
              techStack={techStack}
              compStatus={compStatus}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <button
            title="Any Suggestions?"
            className="cursor-pointer whitespace-nowrap shadow-md md:w-[400px] text-[18px] p-4 rounded-full font-extrabold transform duration-300 bg-blue-600 text-white hover:scale-105"
            onClick={() => {
              document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Any Suggestions?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
