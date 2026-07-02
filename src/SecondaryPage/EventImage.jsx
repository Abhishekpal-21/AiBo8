import { useParams } from "react-router-dom";
import "../App.css";

import RoboWarDetail from "../assets/images/Robowardetail.png";
import RoboRumbleDetail from "../assets/images/Roborumbledetail.jpeg";
import RoboSoccerDetail from "../assets/images/RoboSoccerdetail.jpeg";
import RoboRaceDetail from "../assets/images/Roboracedetail.jpeg";
import DroneRaceDetail from "../assets/images/droneracedetail.jpg";
import HackathonDetail from "../assets/images/hackathondetail.png";

const images = {
  "robo-war": RoboWarDetail,
  "robo-rumble": RoboRumbleDetail,
  "robo-soccer": RoboSoccerDetail,
  "robo-race": RoboRaceDetail,
  "drone-race": DroneRaceDetail,
  hackathon: HackathonDetail,
};

function EventImage() {
  const { eventName } = useParams();

  return (
    <section className="event-image-page">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="event-image-container">
        <h1>Event Details</h1>
        <p>Explore complete information about the event.</p>

        <img
          src={images[eventName]}
          alt={eventName}
          className="event-detail-image"
        />
      </div>
    </section>
  );
}

export default EventImage;
