import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsDetails = [
    {
      title: "Al-Yeqeen Task Tracker",
      description:
        "A task management app that provides a comprehensive and intuitive interface, allowing users to efficiently organize and track their workflow by offering a clear breakdown of tasks, including completed, in-progress, and terminated tasks, all at a glance.",
      imageSrc: "/alyeqeentasktrackerimage.png",
      pageLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/Al-Yeqeen-Task-Tracker-App",
      techStack: ""
    },

    {
      title: "Al-Yeqeen Portfolio",
      description:
        "A personal portfolio that highlights my professional experience, educational background, and a showcase of projects, demonstrating my skills and expertise through detailed examples of my work and achievements.",
      imageSrc: "/portfolioimage.png",
      pageLink: "https://suhud-ayodeji-yekini-portfolio-gsax.vercel.app/",
      gitHubLink: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      techStack: ""
    }
  ];
  return (
    <div className="text-white p-10 mt-10 ">
      <h1 id="projects" className="font-extrabold text-[40px] text-center mb-20">
        Projects
      </h1>
      <div className="flex flex-row md:flex-wrap justify-center items-center gap-8 mt-20">
        {projectsDetails.map(({ title, description, imageSrc, pageLink, gitHubLink, techStack }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            imageSrc={imageSrc}
            pageLink={pageLink}
            gitHubLink={gitHubLink}
            techStack={techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
