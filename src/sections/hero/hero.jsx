import "./hero.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="section hero">
      <div className="container">
        <h1 className="small-heading urbanist">
          Hi, I'm <span className="highlight">Carlos</span>.
        </h1>
        <p className="unbounded large-heading hero-text">
          I'm a software engineer with a passion for building digital solutions
          that people love to use.
        </p>
        <div className="hero-links">
          <a href="mailto:cdltg@outlook.com">
            <FaEnvelope size={25} color="var(--primary)" /> Email
          </a>
          <a href="https://www.linkedin.com/in/carlosdlt/">
            <FaLinkedin size={25} color="var(--primary)" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
