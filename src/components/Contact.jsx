import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import resumePDF from "../assets/resume.pdf"; // make sure this path is correct
import "../styles/contact.css";

export default function Contact() {
  return (
    <footer id="" className="contact">

      {/* Divider line */}
      <hr className="footer-hr" />

      <div className="contact-content">

        <div className="footer-text">
          <p>Designed & Developed by Sufyan</p>
        </div>

        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          {/* Resume Download */}
          <a
            href={resumePDF}
            download="Sufyan-Resume.pdf"
            className="social-link"
            aria-label="Download Resume"
          >
            <FaFileAlt size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
}
