"use client";
import AIAssistant from "@/Al_Yeqeen_Bot_Assistant/AIAssistant";
import { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  Code2,
  Award,
  Briefcase,
  GraduationCap,
  Download,
  MessageSquare
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiGit,
  SiExpress,
  SiSocketdotio,
  SiVercel,
  SiGooglecloud,
  SiReactquery,
  SiRender,
  SiOpenai
} from "react-icons/si";
import { useTheme } from "next-themes";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  interface FormData {
    name: string;
    senderEmail: string;
    message: string;
  }
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [responseFromBackEnd, setResponseFromBackEnd] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    senderEmail: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const { name, senderEmail, message } = formData;

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "leadership", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev: FormData) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contactsuhudayodejiyekini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setLoading(false);
        setResponseFromBackEnd(responseData.message);
        setFormData({ name: "", senderEmail: "", message: "" });
      } else {
        setLoading(false);
        setResponseFromBackEnd("Error sending email. Please try again later");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" }
  ];

  const skills = {
    languages: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ],
    databases: [
      { name: "NoSQL", icon: SiMongodb, color: "#47A248" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firestore", icon: SiFirebase, color: "#FFCA28" }
    ],
    deployments: [
      { name: "Render", icon: SiRender, color: "#000000" },
      { name: "Vercel", icon: SiVercel, color: "#000000" }
    ],
    tools: [
      { name: "Open AI SDK", icon: SiOpenai, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", icon: SiReactquery, color: "#764ABC" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Express.js", icon: SiExpress, color: "#000000" }
    ]
  };

  const projects = [
    {
      title: "School Management Platform",
      description:
        "Built a scalable system that streamlines school operations with real-time updates, advanced role-based access, and detailed activity tracking. Includes modules for managing students, staff, enrolment, attendance, billing, and curriculum — optimised for speed and efficient cost and data handling.",
      tech: ["Next.js", "TypeScript", "Redux", "TanStack Query", "Express", "MongoDB"],
      github: "https://github.com/SuhudAlyeqeenDotGithub/FrontEnd-School-Management-System",
      image: "/schoolapp.png"
    },
    {
      title: "AI Chatbot Portfolio Assistant",
      description:
        "Developed an intelligent chatbot that guides visitors around my portfolio, offering personalised conversations, theme switching, and language options — boosting engagement by over 90%.",
      tech: ["Next.js", "OpenAI", "TypeScript", "AI Integration"],
      github: "https://github.com/SuhudAlyeqeenDotGithub/SuhudAyodejiYekiniPortfolio",
      demo: "https://suhud-ayodeji-yekini-portfolio.vercel.app/",
      image: "/alyeqeenbotimage.png"
    },
    {
      title: "Core Values App",
      description:
        "Created a motivational app that delivers AI-generated affirmations based on users’ personal values, with secure authentication and auto-save features to enhance consistency and self-reflection.",
      tech: ["Next.js", "Express", "Mongoose", "AI Integration"],
      github: "https://github.com/SuhudAlyeqeenDotGithub/Alyeqeen-Uplift-FrontEnd",
      image: "/affirmationapp.png"
    },
    {
      title: "Task Management System",
      description:
        "Designed a responsive, real-time task management app with secure access and insightful progress tracking to help users stay organised and productive.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/SuhudAlyeqeenDotGithub/Al-Yeqeen-Task-Tracker-App",
      image: "/taskapp.png"
    }
  ];

  const experiences = [
    {
      title: "Data Analyst & Data System Developer",
      company: "Principle Cleaning Services",
      location: "London, UK",
      period: "Sep 2024 – Present",
      achievements: [
        "Engineered a data system using Google Apps Script JavaScript to analyse Infogrid toilet sensor data, compensating for missing data and creating predictive models, optimising service delivery and resource allocation by 30% and increasing client satisfaction by 55%.",
        "Spearheaded the rearchitecting of data systems using advanced spreadsheet functions, developing interactive dashboards that provided executives with real-time insights into key business metrics, increasing data analysis efficiency by 80% and cutting retrieval times ninefold."
      ]
    },
    {
      title: "IT Data Executive",
      company: "Principle Cleaning Services",
      location: "London, UK",
      period: "Aug 2024 – Nov 2024",
      achievements: [
        "Automated file ownership audits using Google Apps Script, reducing manual work from 4 days to 2 hours",
        " Streamlined Google Slides-to-PDF conversions, cutting task time by 95%",
        "Supported data and content management for the new CMS using Firefoo, improving collaboration by 86%"
      ]
    }
  ];

  const education = [
    {
      degree: "BTEC Level 3 National Extended Diploma in Information Technology",
      grade: "DDD",
      period: "Sep 2022 – Jul 2024"
    },
    {
      degree: "GCSE English",
      grade: "Grade 6",
      period: "Aug 2022"
    },
    {
      degree: "GCSE Mathematics",
      grade: "Grade 5",
      period: "Aug 2022"
    }
  ];

  const leadership = [
    {
      title: "Student Governor & Ambassador",
      period: "2022 – 2024 - Newham College London",
      description: "Led IT initiatives improving learning efficiency by 55%"
    },
    {
      title: "Jack Petchey Award",
      period: "2021 - Newham College London",
      description: "Recognised for contribution to Newham College community"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Navigation */}
      <AIAssistant />
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-25 h-10">
              {theme === "dark" ? (
                <img src="/whitesuhudlogo.png" alt="Suhud Logo White" className="w-full h-full" />
              ) : (
                <img src="/tealsuhudlogo.png" alt="Suhud Logo Teal" className="w-full h-full" />
              )}
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-[#0097a7] text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-[#0097a7] text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#0097a7] shadow-2xl">
                  <img src="/suhudimage.jpeg" alt="Portrait" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0097a7] rounded-full flex items-center justify-center shadow-xl">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-sm font-medium mb-6">
                Full Stack Software Engineer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Evolving through <span className="text-[#0097a7]">code, technology, fitness,</span> and motivation
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Building tools that inspire progress and turning ideas into reality through software
              </p>
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-[#0097a7] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#00838f] transition-all transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am an aspiring Full Stack Software Engineer passionate about turning ideas into meaningful digital
              experiences that solve real-world problems. With a background in data analysis, I&#39;ve developed a
              strong foundation in problem-solving, attention to detail, and data-driven thinking — skills that now
              shape how I approach software design and development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I see coding as more than a technical skill — it&#39;s a creative outlet and a way to bring ideas to life.
              My goal is to build tools that don&#39;t just work but inspire progress and make everyday tasks simpler
              and smarter.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Currently, I work as a Data Analyst at Principle Cleaning Services, driving the creation of systems that
              enhance decision-making and operational efficiency across multiple departments. Alongside this, I continue
              to sharpen my development skills, exploring technologies that bridge data, functionality, and user
              experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Beyond technology, I&#39;m deeply passionate about fitness and motivation — two disciplines that mirror my
              approach to coding: consistency, resilience, and growth. I believe in evolving through code, technology,
              fitness, and motivation — becoming stronger not just in skill, but in mindset and purpose.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              In everything I do, I aim to grow a little more each day — whether it&#39;s solving a coding challenge,
              learning a new framework, or pushing through one more rep in the gym.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Technologies and tools I work with</p>

          <div className="space-y-16">
            {/* Languages & Frameworks */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">
                Languages & Frameworks
              </h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {skills.languages.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110"
                    >
                      <Icon className="w-12 h-12 md:w-16 md:h-16 transition-all" style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">Databases</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {skills.databases.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110"
                    >
                      <Icon className="w-12 h-12 md:w-16 md:h-16 transition-all" style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deployments */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">Deployments</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {skills.deployments.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110"
                    >
                      <Icon className="w-12 h-12 md:w-16 md:h-16 transition-all" style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {skills.tools.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110"
                    >
                      <Icon
                        className="w-12 h-12 md:w-16 md:h-16 transition-all"
                        style={{ color: theme === "dark" && skill.color === "#000000" ? "#FFFFFF" : skill.color }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Skills */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">
                Core Concepts & Specializations
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Object Oriented Programming",
                  "RESTful APIs",
                  "Real-time Applications",
                  "AI Integration",
                  "Database Architecture",
                  "System Design",
                  "Agile Development"
                ].map((concept) => (
                  <span
                    key={concept}
                    className="px-4 py-2 bg-[#0097a7] text-white rounded-full text-sm font-medium hover:bg-[#0097a7]/80 hover:text-white transition-colors cursor-default"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Some of my recent work and contributions</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-65 bg-gradient-to-br from-[#0097a7] to-[#00838f] flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-fill opacity-95" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#0097a7] text-[#0097a7] rounded-lg hover:bg-[#0097a7] hover:text-white transition-all font-medium"
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0097a7] text-white rounded-lg hover:bg-[#00838f] transition-all font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-[#0097a7]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-[#0097a7]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-[#0097a7] font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-[#0097a7] mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-[#0097a7]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                    <p className="text-[#0097a7] font-medium">{edu.grade}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-[#0097a7]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Leadership & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0097a7] to-[#00838f] rounded-2xl p-6 shadow-lg text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{item.period}</p>
                    <p className="text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="suhudayodejiyekinicv.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0097a7] text-white rounded-lg hover:bg-[#00838f] transition-all transform hover:scale-105 shadow-lg font-medium"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-[#0097a7]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Get In Touch</h2>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Let's collaborate and build something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0097a7] transition-all"
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="senderEmail"
                    value={senderEmail}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0097a7] transition-all"
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={message}
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0097a7] transition-all resize-none"
                    onChange={handleInput}
                  ></textarea>
                </div>
                <div className="text-sm font-medium text-center">
                  <div className="ml-3">{message === "" ? "Please enter a message" : ""}</div>
                  <div className="flex flex-col">
                    <div className="ml-3 ">{responseFromBackEnd}</div>
                    {loading && (
                      <div className="flex flex-row gap-2">
                        <div>Sending Email...</div>
                        <div className="w-6 h-6 border-4 border--[#00838f] border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  disabled={!senderEmail || !message}
                  type="submit"
                  className="w-full bg-[#0097a7] text-white px-6 py-3 rounded-lg hover:bg-[#00838f] transition-all font-medium"
                >
                  {senderEmail && message ? "Send Message" : "Fill in the form Please"}
                </button>
              </form>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/447840262030"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#0097a7] hover:bg-[#0097a7]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                    <FaWhatsapp className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">07840262030</div>
                  </div>
                </a>

                <a
                  href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#0097a7] hover:bg-[#0097a7]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-900/10 dark:bg-gray-100/10 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-gray-100 transition-all">
                    <FaGithub className="w-6 h-6 text-gray-900 dark:text-gray-100 group-hover:text-white dark:group-hover:text-gray-900" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">@SuhudAlyeqeenDotGithub</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/suhud-yekini-a78330234/"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#0097a7] hover:bg-[#0097a7]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0077B5]/10 rounded-full flex items-center justify-center group-hover:bg-[#0077B5] transition-all">
                    <FaLinkedin className="w-6 h-6 text-[#0077B5] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">@Suhud Ayodeji Yekini</div>
                  </div>
                </a>

                <a
                  href="mailto:alyekeeniy@gmail.com"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#0097a7] hover:bg-[#0097a7]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0097a7]/10 rounded-full flex items-center justify-center group-hover:bg-[#0097a7] transition-all">
                    <Mail className="w-6 h-6 text-[#0097a7] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      alyekeeniy@gmail.com | suhudayodejiofficial@gmail.com
                    </div>
                  </div>
                </a>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Follow me on social media</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61582986790737"
                      target="_blank"
                      className="w-10 h-10 bg-[#1877F2]/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all group"
                    >
                      <FaFacebook className="w-5 h-5 text-[#1877F2] group-hover:text-white" />
                    </a>
                    <a
                      href="https://x.com/SuhudA_official"
                      target="_blank"
                      className="w-10 h-10  rounded-full flex items-center justify-center bg-gray-100 transition-all group"
                    >
                      <FaXTwitter className="w-5 h-5 text-[#000000] dark:bg-[#ffffff] group-hover:text-[#000000]/80" />
                    </a>
                    <a
                      href="https://www.instagram.com/suhuda_official/"
                      target="_blank"
                      className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                    >
                      <FaInstagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Suhud Ayodeji Yekini Portfolio. Built with Next.js and Tailwind CSS.</p>
          <p className="mt-2 text-sm">Evolving through code, technology, fitness, and motivation</p>
        </div>
      </footer>
    </div>
  );
}
