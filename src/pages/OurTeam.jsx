import "../App.css";

import MD from "../assets/images/MD.jpg";
import Director from "../assets/images/Director.jpg";
import HeadResearch from "../assets/images/Head-Research.png";
import TeamLead from "../assets/images/TeamLead.png";
import DroneHead from "../assets/images/DroneHead.png";
import HR from "../assets/images/HR.png";
import Strategist from "../assets/images/Strategist.png";

const leaders = [
  {
    name: "Mr. Shailendra Singh",
    role: "Head Research and Development",
    image: HeadResearch,
  },
  {
    name: "Mr. Suryansh Srivastava",
    role: "Team Lead Manager",
    image: TeamLead,
  },
  {
    name: "Mr. Gaurav Shukla",
    role: "Drone Department Head",
    image: DroneHead,
  },
  {
    name: "Ms. Ramsha",
    role: "Human Resource Manager",
    image: HR,
  },
  {
    name: "Mr. Dipanshu Rana",
    role: "Digital Strategist",
    image: Strategist,
  },
];

function About() {
  return (
    <section className="aboutteam-page">
      <div className="aboutteam-header">
        <h1>About Us</h1>
        <p>
          Building Innovation Labs, AI Solutions, Robotics & Drone Technologies
          for Future Engineers.
        </p>
      </div>

      <div className="featured-card">
        <div className="featured-image">
          <img src={MD} alt="" />
        </div>

        <div className="featured-content">
          <h2>Ms. Monu Chauhan</h2>
          <span>Managing Director</span>

          <p>
            Monu Chauhan is a visionary entrepreneur dedicated to transforming
            education through innovation. She has successfully established
            multiple technology-driven initiatives empowering students with
            future-ready skills.
          </p>
        </div>
      </div>

      <div className="featured-card reverse">
        <div className="featured-image">
          <img src={Director} alt="" />
        </div>

        <div className="featured-content">
          <h2>Mr. Himanshu Rana</h2>
          <span>AiBo8 Director</span>

          <p>
            Himanshu Rana leads technological innovation, software development
            and digital transformation initiatives with over a decade of
            experience.
          </p>
        </div>
      </div>

      {/* LEADERS */}

      <div className="leaders-section">
        <h2>Our Leaders</h2>

        <div className="leaders-grid">
          {leaders.map((member, index) => (
            <div className="leader-card" key={index}>
              <img src={member.image} alt="" />

              <div className="leader-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
