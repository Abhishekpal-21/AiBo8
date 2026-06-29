import {
  FaRobot,
  FaMicrochip,
  FaSatelliteDish,
  FaBrain,
  FaLeaf,
  FaShieldAlt,
  FaPython,
  FaCube,
} from "react-icons/fa";
import "../App.css";

function WorkshopSection() {
  const workshops = [
    {
      icon: <FaRobot />,
      title: "Robotics Workshop",
      duration: "2-5 Days",
      desc: "Students build autonomous robots while learning sensors, motors, actuators, embedded systems and real-world robotic applications through practical sessions.",
    },
    {
      icon: <FaMicrochip />,
      title: "IoT Workshop",
      duration: "2-5 Days",
      desc: "Hands-on Internet of Things workshop covering Arduino, ESP32, sensors, cloud connectivity and smart automation projects.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Arduino Workshop",
      duration: "2 Days",
      desc: "Learn Arduino programming, interfacing sensors, LEDs, motors, displays and create exciting electronics projects from scratch.",
    },
    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      duration: "3-5 Days",
      desc: "Introduction to Artificial Intelligence, Machine Learning models, Computer Vision, NLP and practical AI applications using Python.",
    },
    {
      icon: <FaLeaf />,
      title: "Raspberry Pi Workshop",
      duration: "2-4 Days",
      desc: "Build embedded Linux projects, IoT systems and AI applications using Raspberry Pi with practical demonstrations.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Drone Technology",
      duration: "3 Days",
      desc: "Understand drone components, flight controller, assembly, programming, aerial mapping and industrial drone applications.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      duration: "2 Days",
      desc: "Learn ethical hacking basics, cyber threats, digital safety, penetration testing concepts and secure networking practices.",
    },
    {
      icon: <FaPython />,
      title: "Python Programming",
      duration: "3 Days",
      desc: "Learn Python fundamentals, automation, data analysis, AI programming and problem solving through live coding sessions.",
    },
    {
      icon: <FaCube />,
      title: "3D Designing & Printing",
      duration: "2 Days",
      desc: "Design 3D models using CAD software and manufacture real prototypes using advanced 3D printing technologies.",
    },
  ];

  return (
    <section className="workshop-section">
      <div className="workshop-heading">
        <span>⚡ Practical Skill Development</span>

        <h2>Technology Workshops We Offer</h2>

        <p>
          Our workshops are designed to bridge the gap between academics and
          industry by providing practical exposure through live demonstrations,
          project-based learning and hands-on sessions conducted by industry
          experts.
        </p>
      </div>

      <div className="workshop-grid">
        {workshops.map((item, index) => (
          <div className="workshop-card" key={index}>
            <div className="workshop-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <span className="duration">{item.duration}</span>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkshopSection;
