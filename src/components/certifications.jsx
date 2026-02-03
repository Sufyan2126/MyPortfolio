import { useRef } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa"; // Not using link icon anymore
import "../styles/certifications.css";
import SectionSeparator from "./SectionSeparator";

import c1 from "../assets/certificates/c1.jpeg";
import c2 from "../assets/certificates/c2.jpeg";
import c3 from "../assets/certificates/c3.jpeg";

const certificationsData = [
    {
        title: "Data Analytics",
        issuer: "Forage",
        date: "Feb 2025",
        image: c3,
    },
    {
        title: "Oracle Netsuite Financial Associate",
        issuer: "Oracle",
        date: "Nov 2025",
        image: c1,
    },
    {
        title: "Data Visualization with PowerBI",
        issuer: "Great Learning",
        date: "Nov 2024",
        image: c2,
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="certifications">
            <h2>Certifications</h2>

            <div className="certifications-grid">
                {certificationsData.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <div className="cert-image-wrapper">
                            <img src={cert.image} alt={cert.title} className="cert-image" />
                        </div>
                        <div className="cert-content">
                            <h3>{cert.title}</h3>
                            <span className="issuer">{cert.issuer}</span>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
