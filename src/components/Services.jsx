import "../App.css";
import LabImage from "../assets/images/ailab.jpg";
import Events from "../assets/images/events.jpg";
import Workshops from "../assets/images/workshop.jpg";
import IndTrain from "../assets/images/industrialTraining.jpg";
import VAC from "../assets/images/courses.jpg";
import Components from "../assets/images/components.jpg";

const services = [
  {
    title: "Lab Setup",
    image: LabImage,
    description:
      "Creating fully-equipped labs for hands-on learning in AI, IoT and Robotics.",
    path: "#",
  },

  {
    title: "Events",
    image: Events,
    description:
      "Organizing tech events, hackathons, and innovation summits to engage learners.",
    path: "/Eventspage",
  },

  {
    title: "Workshops",
    image: Workshops,
    description:
      "Hands-on workshops and innovation summits to engage learners.",
    path: "#",
  },

  {
    title: "Industrial Training",
    image: IndTrain,
    description:
      "Upskilling educators to teach emerging technologies effectively..",
    path: "#",
  },

  {
    title: "Value-Added Courses ",
    image: VAC,
    description: "Specialized courses designed to supplement core curriculum.",
    path: "#",
  },

  {
    title: "Components",
    image: Components,
    description:
      "Robotics kits, IoT devices, sensors, microcontrollers and AI devices.",
    path: "#",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Key Services & Solutions</h2>

        <p>
          We specialize in AI Labs, IoT Labs, Robotics Labs, Workshops,
          Innovation Events and Industry-Oriented Training Programs that empower
          students with practical technical education.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <a href={service.path} className="service-card" key={index}>
            <div className="card-image">
              <img src={service.image} alt={service.title} />
              <div className="card-overlay">
                <span>Explore →</span>
              </div>
            </div>

            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
