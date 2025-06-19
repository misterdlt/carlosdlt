import "./footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FooterSection({ ref }) {
  return (
    <div className="section footer" ref={ref}>
      <div className="container">
        <h2 className="large-heading unbounded uppercase primary-text">
          Let's Talk.
        </h2>
        <p className="content-text">
          Interested in collaborating or have a project in mind? I'd love to
          hear from you!
          <br />
          Feel free to reach out via email or connect with me on LinkedIn.
        </p>
        <div className="footer-links">
          <a href="mailto:cdltg@outlook.com" className="primary-text">
            <FaEnvelope size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/carlosdlt/"
            className="primary-text"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
        <div className="bottom">
          <p className="content-text urbanist">
            © {new Date().getFullYear()} carlosdlt. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
