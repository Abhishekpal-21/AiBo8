import React from "react";
import "../Pages.css";
import { Link } from "react-router-dom";
import robotImg from "../assets/images/Airobot.png";

const Career = () => {
  return (
    <div className="career-page">
      <section className="career-hero">
        <div className="herocareer-content">
          <h1>Build The Future With AiBO8</h1>
          <p>
            Join a team that is transforming education through AI, Robotics,
            IoT, Drones, and Emerging Technologies.
          </p>

          <div className="herocareer-buttons">
            <a href="/OurTeam" className="btn-secondary">
              Life at AiBO8
            </a>
          </div>
        </div>

        <div className="herocontent-image">
          <img src={robotImg} alt="AI Robot" />
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="why-join">
        <h2>Why Join AiBO8?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            🚀
            <h3>Innovation First</h3>
            <p>Work on cutting-edge AI, Robotics and Drone technologies.</p>
          </div>

          <div className="benefit-card">
            🌍
            <h3>Impact Millions</h3>
            <p>Help shape the future of technology education.</p>
          </div>

          <div className="benefit-card">
            📚
            <h3>Continuous Learning</h3>
            <p>Upskill through workshops, certifications and projects.</p>
          </div>

          <div className="benefit-card">
            🤝
            <h3>Collaborative Culture</h3>
            <p>Work alongside passionate innovators and educators.</p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section id="culture" className="culture-section">
        <div className="culture-content">
          <h2>Life At AiBO8</h2>

          <p>
            At AiBO8, we believe in curiosity, experimentation, and real-world
            innovation. Every project is an opportunity to create technology
            that inspires students and industries alike.
          </p>

          <ul>
            <li>✔ Flexible Work Environment</li>
            <li>✔ Real Industry Projects</li>
            <li>✔ Robotics & Drone Exposure</li>
            <li>✔ Growth-Focused Mentorship</li>
          </ul>
        </div>

        <div className="floating-card">
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="openings-section">
        <h2>Current Openings</h2>

        <div className="job-grid">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>React • JavaScript • UI/UX</p>
            <a href="/CareerContact">Apply Now →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="career-cta">
        <h2>Didn't Find Your Role?</h2>
        <p>We are always looking for passionate innovators.</p>
        <Link to="/CareerContact" className="contactabout-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Career;
