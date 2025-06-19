import "./hero.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="section hero">
      <div className="container">
        <h1 className="small-heading urbanist">
          Hi, I'm <span className="highlight">Carlos</span>.
        </h1>
        <p className="unbounded large-heading">
          I'm a software engineer with a passion for building modern,
          responsive, and user-friendly digital solutions that make a
          difference.
        </p>
        <div className="hero-links">
          <a href="mailto:cdltg@outlook.com">
            <FaEnvelope size={32} color="var(--primary)" />
          </a>
          <a href="https://www.linkedin.com/in/carlosdlt/">
            <FaLinkedin size={30} color="var(--primary)" />
          </a>
        </div>
      </div>
    </div>
  );
}
