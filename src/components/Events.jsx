import { Link } from "react-router-dom";
import "../App.css";
import RoboWar from "../assets/images/robowar.jpg";
import RoboRumble from "../assets/images/roborumble.jpg";
import RoboSoccer from "../assets/images/RoboSoccer.jpg";
import RoboRace from "../assets/images/roborace.jpg";
import DroneRace from "../assets/images/dronerace.jpg";
import Hackathon from "../assets/images/Hackathon.jpg";

const events = [
  {
    title: "Robo War",
    tag: "AIBO8 Robo War",
    image: RoboWar,
    path: "/event/robo-war",
  },
  {
    title: "Robo Rumble",
    tag: "AIBO8 Robo Rumble",
    image: RoboRumble,
    path: "/event/robo-rumble",
  },
  {
    title: "Robo Soccer",
    tag: "AIBO8 Robo Soccer",
    image: RoboSoccer,
    path: "/event/robo-soccer",
  },
  {
    title: "Robo Race",
    tag: "AIBO8 Robo Race",
    image: RoboRace,
    path: "/event/robo-race",
  },
  {
    title: "Drone Race",
    tag: "AIBO8 Drone Race",
    image: DroneRace,
    path: "/event/drone-race",
  },
  {
    title: "Hackathon",
    tag: "AIBO8 Hackathon",
    image: Hackathon,
    path: "/event/hackathon",
  },
];

export default function Events() {
  return (
    <section className="events-section">
      <div className="events-header">
        <h2>AI-BO8 Events</h2>

        <p>
          We organize technology-driven events that inspire students through
          innovation and creativity. Explore our robotics competitions, drone
          races, hackathons and AI innovation challenges.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <Link to={event.path} key={index} className="event-card">
            <div className="card-image">
              <img src={event.image} alt={event.title} />
            </div>

            <div className="card-content">
              <span>{event.tag}</span>
              <h3>{event.title}</h3>

              <div className="explore-btn">Explore →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
