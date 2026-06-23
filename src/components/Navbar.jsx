import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="AiBo8 Logo" />
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#">Home</a>

        {/* Company */}
        <div className="dropdown">
          <button>Company ▾</button>
          <div className="mega-menu">
            <a href="/OurTeam">Our Team</a>
            <a href="/AboutUs">About Us</a>
            <a href="/Eventspage">Events</a>
            <a href="/Testimonial">Testimonials</a>
          </div>
        </div>

        {/* Shop */}
        <div className="dropdown">
          <button>Shop ▾</button>
          <div className="mega-menu">
            <a href="#">Electronics Kits</a>
            <a href="#">Drone</a>
            <a href="#">Nvidia</a>
            <a href="#">Projects</a>
            <a href="#">3D Printer</a>
          </div>
        </div>

        {/* Courses */}
        <div className="dropdown">
          <button>Courses ▾</button>
          <div className="mega-menu">
            <a href="#">Python</a>
            <a href="#">AI / ML</a>
            <a href="#">IOT</a>
            <a href="#">Data Analytics</a>
            <a href="#">Data Science</a>
            <a href="#">Full Stack</a>
            <a href="#">Robotics</a>
            <a href="#">Arduino</a>
            <a href="#">Raspberry Pi</a>
            <a href="#">Drone Technology</a>
            <a href="#">3D Printing</a>
          </div>
        </div>

        {/* Labs */}
        <div className="dropdown">
          <button>Our Labs ▾</button>
          <div className="mega-menu">
            <a href="#">PM Shree Lab</a>
            <a href="#">Composite Skill Lab</a>
            <a href="#">Atal Tinkering Lab</a>
            <a href="#">Robotics & IOT Lab</a>
            <a href="#">AR / VR / MR Lab</a>
            <a href="#">Cyber Security Lab</a>
            <a href="#">Drone Lab</a>
            <a href="#">AI-ML Lab</a>
            <a href="#">Humanoid Lab</a>
          </div>
        </div>

        {/* Workshops */}
        <div className="dropdown">
          <button>Workshops ▾</button>
          <div className="mega-menu">
            <a href="#">Robotics</a>
            <a href="#">IOT</a>
            <a href="#">Arduino</a>
            <a href="#">AI / ML</a>
            <a href="#">Raspberry Pi</a>
            <a href="#">3D Designing</a>
            <a href="#">Cyber Security</a>
            <a href="#">Python Programming</a>
          </div>
        </div>

        <a href="/Career">Career</a>

        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>
      </nav>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}
