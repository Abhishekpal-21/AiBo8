import "../Pages.css";
import { Link } from "react-router-dom";
import team1 from "../assets/images/Airobot.png";

import cert1 from "../assets/images/cert2.png";
import cert2 from "../assets/images/cert3.png";
import cert3 from "../assets/images/cert4.png";
import cert4 from "../assets/images/cert5.png";
import cert5 from "../assets/images/cert6.png";

const certificates = [cert1, cert2, cert3, cert4, cert5];

export default function About() {
  return (
    <div className="aboutus-page">
      {/* HERO */}

      <section className="hero-aboutuspage">
        <div className="hero-contentabout">
          <span className="badge">🚀 AI • Robotics • IoT • Drones</span>

          <h1>
            Building Future Innovators Through
            <span> Emerging Technologies</span>
          </h1>

          <p>
            AIBO8 empowers students and institutions with future-ready skills
            through practical learning, innovation labs, workshops and
            certifications.
          </p>
        </div>

        <div className="heroabout-image">
          <img src={team1} alt="" />
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Workshops</p>
        </div>

        <div className="stat-card">
          <h2>150+</h2>
          <p>Institutions</p>
        </div>

        <div className="stat-card">
          <h2>50K+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>8+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* ABOUT */}

      <section className="aboutus-section">
        <div className="aboutus-content">
          <h2>About AIBO8</h2>

          <p>
            AIBO8, a proud initiative of Cloud Education, focuses on
            transforming education through AI, Robotics, IoT, Drones and other
            emerging technologies.
          </p>

          <p>
            We bridge the gap between academic learning and industry
            requirements through practical exposure and innovation-driven
            training.
          </p>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="timeline">
        <h2>Our Journey</h2>

        <div className="timeline-item">
          <span>2017</span>
          <p>Cloud Education Founded</p>
        </div>

        <div className="timeline-item">
          <span>2019</span>
          <p>Robotics Labs Established</p>
        </div>

        <div className="timeline-item">
          <span>2021</span>
          <p>AI & IoT Programs Introduced</p>
        </div>

        <div className="timeline-item">
          <span>2023</span>
          <p>Drone Technology Expansion</p>
        </div>

        <div className="timeline-item">
          <span>2025</span>
          <p>150+ Institutions Connected</p>
        </div>
      </section>

      {/* VISION */}

      <section className="vision-mission">
        <div className="glass-card">
          <h3>Vision</h3>

          <p>
            To become the leading platform for technology-driven education and
            innovation.
          </p>
        </div>

        <div className="glass-card">
          <h3>Mission</h3>

          <p>
            Empower students with practical, industry-relevant technology
            skills.
          </p>
        </div>
      </section>

      {/* DOMAINS */}

      <section className="domains">
        <h2>Technology Domains</h2>

        <div className="domain-grid">
          <div className="domain-card">🤖 Robotics</div>
          <div className="domain-card">🧠 AI & ML</div>
          <div className="domain-card">📡 IoT</div>
          <div className="domain-card">🚁 Drones</div>
          <div className="domain-card">🔐 Cyber Security</div>
          <div className="domain-card">🥽 AR / VR</div>
        </div>
      </section>

      {/* CERTIFICATES */}

      <section className="certifications">
        <h2>Certifications & Achievements</h2>

        <div className="certificate-slider">
          <div className="certificate-track">
            {[...certificates, ...certificates].map((img, index) => (
              <div className="certificate-card" key={index}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <h2>Ready To Build Future Skills?</h2>

        <p>Join the AI revolution with AIBO8.</p>

        <Link to="/contact" className="contactabout-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
