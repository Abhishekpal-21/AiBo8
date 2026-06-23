import "../Pages.css";
import img1 from "../assets/images/roborumble.jpg";
import img2 from "../assets/images/roborumble.jpg";
import img3 from "../assets/images/roborumble.jpg";
import img4 from "../assets/images/roborumble.jpg";
import img5 from "../assets/images/roborumble.jpg";
import img6 from "../assets/images/roborumble.jpg";

const testimonials = [
  {
    name: "1",
    role: "Engineering Student",
    image: img1,
    review: ".....",
  },
  {
    name: "2",
    role: "School Teacher",
    image: img2,
    review: "/.....",
  },
  {
    name: "3",
    role: "College Principal",
    image: img3,
    review: ".........",
  },
  {
    name: "4",
    role: "Student",
    image: img4,
    review: "..........",
  },
  {
    name: "5",
    role: "College Principal",
    image: img5,
    review: "..........",
  },
  {
    name: "6",
    role: "College Principal",
    image: img6,
    review: "........",
  },
];

function Testimonials() {
  return (
    <div className="testimonial-page">
      {/* Hero */}
      <section className="testimonial-hero">
        <h1>What People Say About Us</h1>
        <p>
          Hear from students, teachers, institutions, and industry partners who
          have experienced the AIBO8 ecosystem.
        </p>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-box">
          <h2>5000+</h2>
          <p>Students Trained</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>Institutions</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Workshops</p>
        </div>

        <div className="stat-box">
          <h2>98%</h2>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p className="review">"{item.review}"</p>

            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="testimonial-cta">
        <h2>Join Thousands of Learners & Innovators</h2>
        <p>
          Become part of the future with AI, Robotics, Drones, IoT and Emerging
          Technologies.
        </p>

        <a href="/contact" className="cta-btn">
          Get Started
        </a>
      </section>
    </div>
  );
}

export default Testimonials;
