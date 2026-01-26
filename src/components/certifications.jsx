import { FaPaperPlane, FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/getInTouch.css";

export default function GetInTouch() {
  return (
    <section id="contact" className="contact-section">

      <h1 className="contact-heading">Get In Touch</h1>

      <section className="get-in-touch">
        <div className="container two-column">

          {/* LEFT SIDE */}
          <div className="left-boxes">

            {/* EMAIL BOX */}
            <div className="info-box">
              <h2>Let's Connect</h2>
              <p className="email-text">
                <FaEnvelope className="info-icon" /> sufyan@example.com
              </p>
              <p className="location-text">
                <FaMapMarkerAlt className="info-icon" /> Thane, Mumbai
              </p>
            </div>

            {/* RESUME BOX */}
            <div className="info-box resume-box">
              <h2>
                Resume
                <a href="/resume.pdf" download className="resume-icon">
                  <FaDownload />
                </a>
              </h2>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="right-form">
            <h2>Send A Message</h2>
            <p>Fill in the form below and I’ll get back to you.</p>

            <div className="form-grid">
              <input type="text" placeholder="Your Name" className="email-input" />
              <input type="email" placeholder="Your Email" className="email-input" />
              <textarea placeholder="Your Message" className="message-box"></textarea>

              <button className="send-btn full-btn">
                <FaPaperPlane /> Send Message
              </button>
            </div>
          </div>

        </div>
      </section>

    </section>
  );
}
