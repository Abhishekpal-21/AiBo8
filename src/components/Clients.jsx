import "../App.css";
import img1 from "../assets/images/ClassofOne.jpg";
import img2 from "../assets/images/CSKM.jpg";
import img3 from "../assets/images/EIT.jpg";
import img4 from "../assets/images/GNIOT.jpg";
import img5 from "../assets/images/ITM.png";
import img6 from "../assets/images/Manthan.png";
import img7 from "../assets/images/Shivalik.jpg";
import img8 from "../assets/images/Phoenics.jpg";
import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";
import P5 from "../assets/images/P5.png";
import P6 from "../assets/images/P6.png";
import P7 from "../assets/images/P7.png";

const clients = [img1, img2, img3, img4, img5, img6, img7, img8];

const partners = [P1, P2, P3, P4, P5, P6, P7];

export default function PartnersClients() {
  return (
    <section className="partners-section">
      <div className="section-title">
        <span>Trusted By</span>
        <h2>Our Valuable Clients</h2>
        <p>
          Schools, colleges and institutions that trust our AI, Robotics and
          STEM education solutions.
        </p>
      </div>

      <div className="trustedclients">
        <div className="trustedpartner">
          {[...clients, ...clients].map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="stats">
        <div>
          <h3>150+</h3>
          <p>Institutions</p>
        </div>

        <div>
          <h3>50K+</h3>
          <p>Students Trained</p>
        </div>

        <div>
          <h3>20+</h3>
          <p>States Reached</p>
        </div>
      </div>

      <div className="section-title second">
        <h2>Alliance & Partnerships</h2>
        <p>
          Collaborating with industry leaders to deliver advanced AI, Robotics,
          IoT and STEM learning experiences.
        </p>
      </div>

      <div className="trustedclients reverse">
        <div className="trustedpartner reverse-track">
          {[...partners, ...partners].map((logo, index) => (
            <div className="logo-card partner" key={index}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
