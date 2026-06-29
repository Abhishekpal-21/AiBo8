import "../App.css";

import img1 from "../assets/images/ClassofOne.jpg";
import img2 from "../assets/images/CSKM.jpg";
import img3 from "../assets/images/DPSDADRI.jpg";
import img4 from "../assets/images/EIT.jpg";
import img5 from "../assets/images/GNIOT.jpg";
import img6 from "../assets/images/ITBAUN.jpg";
import img7 from "../assets/images/ITM.png";
import img8 from "../assets/images/JNGEC.jpg";
import img9 from "../assets/images/Manthan.png";
import img10 from "../assets/images/MAYADEVI.jpg";
import img11 from "../assets/images/Phoenics.jpg";
import img12 from "../assets/images/Rajshree.jpg";
import img13 from "../assets/images/RGGEC.jpg";
import img14 from "../assets/images/SBDAV.png";
import img15 from "../assets/images/Shivalik.jpg";
import img16 from "../assets/images/THDC.png";
const collaborations = [
  {
    image: img1,
    name: "Class of One Global School",
    location: "Delhi",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img2,
    name: "CSKM Public School",
    location: "Noida",
    description: "Drone technology and coding lab setup for students.",
  },
  {
    image: img3,
    name: "DPS Dadri",
    location: "Dadri",
    description: "STEM laboratory with AI and IoT project facilities.",
  },
  {
    image: img4,
    name: "Echelon Institute of Tehnology",
    location: "Faridabad",
    description: "Hands-on robotics workshops and innovation ecosystem.",
  },
  {
    image: img5,
    name: "GNIOT",
    location: "Greater Noida",
    description: "AI learning center and project incubation support.",
  },
  {
    image: img6,
    name: "IT Baun",
    location: "Uttarkashi",
    description: "Coding, robotics, and drone lab implementation.",
  },
  {
    image: img7,
    name: "ITM",
    location: "Gwalior",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img8,
    name: "JNGEC",
    location: "Sundernagar",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img9,
    name: "The Manthan School",
    location: "Delhi",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img10,
    name: "Maya Devi University",
    location: "Dehradun",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img11,
    name: "Phonics University",
    location: "Roorkee",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img12,
    name: "Rajshree College",
    location: "Bareilly",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img13,
    name: "RGGEC",
    location: "Kangra",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img14,
    name: "DAV College",
    location: "New Delhi",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img15,
    name: "Shivalik College of Engineering",
    location: "Delhi",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
  {
    image: img16,
    name: "THDC Institute",
    location: "Tehri",
    description:
      "Established AI & Robotics Innovation Lab with advanced hardware and training programs.",
  },
];

export default function Collaborations() {
  return (
    <div className="collaboration-page">
      <div className="page-header">
        <h1>Our Collaborations</h1>
        <p>
          Transforming educational institutions through AI, Robotics, Drone
          Technology, and Innovation Labs.
        </p>
      </div>

      <div className="collaboration-grid">
        {collaborations.map((item, index) => (
          <div key={index} className="collaboration-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="card-content">
              <h3>{item.name}</h3>
              <span>{item.location}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
