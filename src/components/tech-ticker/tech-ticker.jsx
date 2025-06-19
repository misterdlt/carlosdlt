import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaSass,
  FaDocker,
  FaAngular,
} from "react-icons/fa";
import "./tech-ticker.css";
import { DiJqueryLogo, DiMongodb, DiMysql } from "react-icons/di";
import {
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiGreensock,
} from "react-icons/si";

export default function TechTicker() {
  const ICON_SIZE = 30;
  let items = [
    {
      icon: <FaReact size={ICON_SIZE} />,
      name: "React",
    },
    {
      icon: <FaAngular size={ICON_SIZE} />,
      name: "Angular",
    },
    {
      icon: <SiNextdotjs size={ICON_SIZE} />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs size={ICON_SIZE} />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={ICON_SIZE} />,
      name: "Express",
    },
    {
      icon: <FaJs size={ICON_SIZE} />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={ICON_SIZE} />,
      name: "TypeScript",
    },
    {
      icon: <SiGreensock size={ICON_SIZE} />,
      name: "GSAP",
    },
    {
      icon: <FaJava size={ICON_SIZE} />,
      name: "Java",
    },
    {
      icon: <FaHtml5 size={ICON_SIZE} />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={ICON_SIZE} />,
      name: "CSS",
    },
    {
      icon: <FaSass size={ICON_SIZE} />,
      name: "Sass",
    },
    {
      icon: <DiJqueryLogo size={ICON_SIZE} />,
      name: "jQuery",
    },
    {
      icon: <DiMongodb size={ICON_SIZE} />,
      name: "MongoDB",
    },
    {
      icon: <DiMysql size={ICON_SIZE} />,
      name: "MySQL",
    },
    {
      icon: <FaGitAlt size={ICON_SIZE} />,
      name: "Git",
    },
    {
      icon: <FaDocker size={ICON_SIZE} />,
      name: "Docker",
    },
  ];

  // Duplicate the items to ensure continuous scrolling
  const tickerItems = [...items, ...items];

  return (
    <div className="tech-stack-container">
      <div className="ticker">
        <div className="ticker__wrapper">
          <div className="ticker__slide">
            {tickerItems.map((item, index) => (
              <div className="tech_stack_item" key={`item-${index}`}>
                <div className="tech_icon_wrapper">{item.icon}</div>
                <div className="tech_name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
