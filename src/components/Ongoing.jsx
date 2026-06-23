import "../App.css";
import img1 from "../assets/images/Workshop1.jpg";
import img2 from "../assets/images/Workshop2.jpg";
import img3 from "../assets/images/Workshop3.jpg";
import img4 from "../assets/images/Workshop4.jpg";
import img5 from "../assets/images/logo.png";
import img6 from "../assets/images/logo.png";
import img7 from "../assets/images/logo.png";
import img8 from "../assets/images/logo.png";

const events = [
  {
    title: "GPC Kangra",
    desc: "1",
    image: img1,
    link: "#",
  },
  {
    title: "CSKM Public School",
    desc: "2",
    image: img2,
    link: "#",
  },
  {
    title: "GPC Banikhet",
    desc: "3",
    image: img3,
    link: "#",
  },
  {
    title: "RGGEC, Nagrota",
    desc: "4",
    image: img4,
    link: "#",
  },
  {
    title: "5",
    desc: "5",
    image: img5,
    link: "#",
  },
  {
    title: "6",
    desc: "6",
    image: img6,
    link: "#",
  },
  {
    title: "7",
    desc: "7",
    image: img7,
    link: "#",
  },
  {
    title: "8",
    desc: "8",
    image: img8,
    link: "#",
  },
];

export default function WorkshopGallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Explore Our Workshops In Action</h2>
        <p>
          Discover hands-on learning experiences in AI, Robotics, IoT,
          Automation, Drone Technology and Industry-Oriented Training.
        </p>
      </div>

      <div className="gallery-grid">
        {events.map((event, index) => (
          <a href={event.link} key={index} className="gallery-card">
            <img src={event.image} alt={event.title} />

            <div className="gallery-overlay">
              <h3>{event.title}</h3>
              <p>{event.desc}</p>

              {/* <button>View Details →</button> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
