import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}

        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="AI-B08" />
            <h2>AI-B08</h2>
          </div>

          <p>
            Empowering the next generation through AI, Robotics, IoT, Drone
            Technology and Industry-Oriented STEM Education.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/people/AIBO8/61574048788384/">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/ai_bo8_/">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/aibo8/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* LINKS */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/AboutUs">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}

        <div className="footer-links">
          <h3>Services</h3>

          <Link to="#">AI Labs</Link>
          <Link to="#">Robotics</Link>
          <Link to="#">IoT Training</Link>
          <Link to="#">Workshops</Link>
          <Link to="#">Certification</Link>
        </div>

        {/* CONTACT */}

        <div className="footer-links">
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> info@aib08.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Delhi, India
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p>© 2026 AI-B08. All Rights Reserved.</p>

        <button className="scroll-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
