import "../App.css";

import img1 from "../assets/images/ITBAUN.jpg";
import img2 from "../assets/images/THDC.png";
import img3 from "../assets/images/Shivalik.jpg";
import img4 from "../assets/images/GNIOT.jpg";
import img5 from "../assets/images/EIT.jpg";
import img6 from "../assets/images/ClassofOne.jpg";
import img7 from "../assets/images/SBDAV.png";

const collaborations = [
  {
    title: "Him Academy Public School",
    location: "Hamirpur",
    image: img1,
  },
  {
    title: "The Manthan Schools",
    location: "Greater Noida",
    image: img2,
  },
  {
    title: "CSKM Public School",
    location: "Chhatarpur",
    image: img3,
  },
  {
    title: "Delhi Public School",
    location: "Delhi",
    image: img4,
  },
  {
    title: "Delhi Public School",
    location: "Delhi",
    image: img5,
  },
  {
    title: "Delhi Public School",
    location: "Delhi",
    image: img6,
  },
  {
    title: "Delhi Public School",
    location: "Delhi",
    image: img7,
  },
];

export default function Collaboration() {
  return (
    <section className="collaboration-section">
      <div className="collab-header">
        <div>
          <h2>Our Collaborations</h2>
          <p>
            Collaborating with schools, colleges and universities to establish
            AI, Robotics and IoT innovation labs.
          </p>
        </div>

        <a href="/CollabAll" className="view-btn">
          View All →
        </a>
      </div>

      <div className="slider">
        <div className="slide-track">
          {[...collaborations, ...collaborations].map((item, index) => (
            <div className="collab-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
