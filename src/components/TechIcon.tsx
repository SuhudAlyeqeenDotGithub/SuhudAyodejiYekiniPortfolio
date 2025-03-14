import { DiMongodb } from "react-icons/di";
import { FaReact, FaGit, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiMongoose, SiNextdotjs, SiHtml5, SiCss3, SiExpress, SiTypescript, SiJavascript } from "react-icons/si";

const ReactIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaReact className="text-blue-600 text-4xl" /> {/* React icon color */}
      <p>React</p>
    </div>
  );
};

const TailwindIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <RiTailwindCssFill className="text-teal-400 text-4xl" /> {/* TailwindCSS icon color */}
      <p>Tailwind</p>
    </div>
  );
};

const NodeJsIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaNodeJs className="text-green-600 text-4xl" /> {/* Node.js icon color */}
      <p>Node.js</p>
    </div>
  );
};

const MongoDbIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DiMongodb className="text-green-500 text-4xl" /> {/* MongoDB icon color */}
      <p>MongoDB</p>
    </div>
  );
};

const ReduxToolkitIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiRedux className="text-purple-600 text-4xl" /> {/* Redux Toolkit icon color */}
      <p>Redux Toolkit</p>
    </div>
  );
};

const MongooseIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiMongoose className="text-green-800 text-4xl" /> {/* Mongoose icon color */}
      <p>Mongoose</p>
    </div>
  );
};

const NextJsIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiNextdotjs className="text-black text-4xl" /> {/* Next.js icon color */}
      <p>Next.js</p>
    </div>
  );
};

const HtmlIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiHtml5 className="text-orange-600 text-4xl" /> {/* HTML5 icon color */}
      <p>HTML</p>
    </div>
  );
};

const CssIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiCss3 className="text-blue-600 text-4xl" /> {/* CSS3 icon color */}
      <p>CSS</p>
    </div>
  );
};

const ExpressIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiExpress className="text-black text-4xl" /> {/* Express.js icon color */}
      <p>Express.js</p>
    </div>
  );
};

const TypeScriptIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiTypescript className="text-blue-600 text-4xl" /> {/* TypeScript icon color */}
      <p>TypeScript</p>
    </div>
  );
};

const GitIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaGit className="text-red-600 text-4xl" /> {/* Git icon color */}
      <p>Git</p>
    </div>
  );
};

const JavascriptIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SiJavascript className="text-yellow-500 text-4xl" /> {/* JavaScript icon color */}
      <p>JavaScript</p>
    </div>
  );
};

export {
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
};
