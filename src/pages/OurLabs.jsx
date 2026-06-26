import React from "react";
import "../Pages.css";

import aiCollege from "../assets/images/logo.png";
import iot from "../assets/images/logo.png";
import robotics from "../assets/images/logo.png";
import humanoid from "../assets/images/logo.png";
import drone from "../assets/images/logo.png";
import aiml from "../assets/images/logo.png";

import {
  FaRobot,
  FaMicrochip,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaHelicopter,
  FaGraduationCap,
  FaTools,
  FaAward,
  FaJoget,
} from "react-icons/fa";

const labs = [
  {
    title: "AI-Driven College Setup",
    image: aiCollege,
    icon: <FaBuilding />,
    features: [
      "Smart Classrooms",
      "AI Curriculum & Tools",
      "Digital Learning Ecosystem",
    ],
  },
  {
    title: "IoT Lab",
    image: iot,
    icon: <FaMicrochip />,
    features: [
      "IoT Devices & Sensors",
      "Real-time Analytics",
      "Automation & Connectivity",
    ],
  },
  {
    title: "Robotics Lab",
    image: robotics,
    icon: <FaRobot />,
    features: [
      "Robot Kits",
      "Programming & Simulation",
      "Mechatronics Projects",
    ],
  },
  {
    title: "Humanoid Lab",
    image: humanoid,
    icon: <FaRobot />,
    features: ["Humanoid Robots", "AI Integration", "Human-Robot Interaction"],
  },
  {
    title: "Drone Lab",
    image: drone,
    icon: <FaHelicopter />,
    features: ["Drone Design", "Flight Controller", "Aerial Mapping"],
  },
  {
    title: "AI ML Lab",
    image: aiml,
    icon: <FaBrain />,
    features: ["Machine Learning", "Deep Learning", "Data Analytics"],
  },
];

export default function LabsWeOffer() {
  return (
    <section className="labs-section">
      <div className="labs-title">
        <h2>
          LAB'S <strong>We Offer</strong>
        </h2>

        <p>
          Our designed Multi-Tech Labs augment training programs and empower
          institutions with industry-ready infrastructure, modern curriculum,
          and practical learning experiences.
        </p>
      </div>

      <div className="labs-grid">
        {labs.map((lab, index) => (
          <div className="lab-card" key={index}>
            <img src={lab.image} alt={lab.title} />

            <div className="icon-box">{lab.icon}</div>

            <h3>{lab.title}</h3>

            <ul>
              {lab.features.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bottom-features">
        <div className="feature">
          <FaAward />
          <div>
            <h4>Industry Aligned</h4>
            <p>Built with latest technology standards.</p>
          </div>
        </div>

        <div className="feature">
          <FaGraduationCap />
          <div>
            <h4>Hands-on Learning</h4>
            <p>Project based practical training.</p>
          </div>
        </div>

        <div className="feature">
          <FaBrain />
          <div>
            <h4>Future Ready</h4>
            <p>Emerging technologies and innovation.</p>
          </div>
        </div>

        <div className="feature">
          <FaTools />
          <div>
            <h4>Complete Support</h4>
            <p>Setup, training and maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
