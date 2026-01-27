import {
  FaPaperPlane,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import "../styles/getInTouch.css";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ NEW STATE
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send data to backend
  const handleSubmit = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("❌ Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // optional: auto hide message
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        setErrorMsg("❌ Something went wrong");
      }
    } catch (error) {
      setErrorMsg("❌ Server error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-heading">Get In Touch</h1>

      <section className="get-in-touch">
        <div className="container two-column">
          {/* LEFT SIDE */}
          <div className="left-boxes">
            <div className="info-box">
              <h2>Let's Connect</h2>

              <p className="email-text">
                <FaEnvelope className="info-icon" />
                sufyan@example.com
              </p>

              <p className="location-text">
                <FaMapMarkerAlt className="info-icon" />
                Thane, Mumbai
              </p>
            </div>

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
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="email-input"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="email-input"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="message-box"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className="send-btn full-btn" onClick={handleSubmit}>
                <FaPaperPlane /> Send Message
              </button>

              {/* ✅ SUCCESS / ERROR MESSAGE */}
              {successMsg && (
                <p style={{ color: "green", marginTop: "12px"}}>
                  {successMsg}
                </p>
              )}

              {errorMsg && (
                <p style={{ color: "red", marginTop: "12px" }}>
                  {errorMsg}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
