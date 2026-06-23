// import "../App.css";
// import bgVideo from "../assets/images/backgrounddrop.mp4";
// function Background() {
//   return (
//     <section
//       className="hero"
//       style={{
//         backgroundVideo: `url(${bgVideo})`,
//       }}
//     >
//       <div className="overlay"></div>

//       <div className="hero-content">
//         <span className="hero-badge">
//           🚀 Innovation Lab | AI • Robotics • Drone Technology
//         </span>

//         <h1>
//           Transforming Ideas Into
//           <span> Intelligent Solutions</span>
//         </h1>

//         <p>
//           Empowering students and innovators through Artificial Intelligence,
//           Robotics, Drone Technology, IoT, 3D Printing and Industry Projects.
//         </p>

//         {/* <div className="hero-buttons">
//           <button className="primary-btn">Get Started</button>
//           <button className="secondary-btn">Explore Workshops</button>
//         </div> */}

//         <div className="hero-stats">
//           <div>
//             <h2>500+</h2>
//             <span>Students Trained</span>
//           </div>

//           <div>
//             <h2>50+</h2>
//             <span>Workshops</span>
//           </div>

//           <div>
//             <h2>20+</h2>
//             <span>Projects</span>
//           </div>

//           <div>
//             <h2>5+</h2>
//             <span>Domains</span>
//           </div>
//         </div>
//       </div>

//       <div className="floating-cards">
//         <div className="tech-card card1">
//           <h3>🤖 AI Development</h3>
//           <p>Machine Learning & Automation</p>
//         </div>

//         <div className="tech-card card2">
//           <h3>🚁 Drone Training</h3>
//           <p>Design & Flight Systems</p>
//         </div>

//         <div className="tech-card card3">
//           <h3>🖨️ 3D Printing</h3>
//           <p>Rapid Prototyping</p>
//         </div>
//         <div className="tech-card card4">
//           <h3>🤖 Robotics</h3>
//           <p>Robotics in engineering</p>
//         </div>
//       </div>

//       <div className="scroll-indicator">↓ Scroll To Discover</div>
//     </section>
//   );
// }
// export default Background;
import "../App.css";
import bgVideo from "../assets/images/backgrounddrop.mp4";

function Background() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">
          🚀 Innovation Lab | AI • Robotics • Drone Technology
        </span>

        <h1>
          Transforming Ideas Into
          <span> Intelligent Solutions</span>
        </h1>

        <p>
          Empowering students and innovators through Artificial Intelligence,
          Robotics, Drone Technology, IoT, 3D Printing and Industry Projects.
        </p>

        <div className="hero-stats">
          <div>
            <h2>500+</h2>
            <span>Students Trained</span>
          </div>

          <div>
            <h2>50+</h2>
            <span>Workshops</span>
          </div>

          <div>
            <h2>20+</h2>
            <span>Projects</span>
          </div>

          <div>
            <h2>5+</h2>
            <span>Domains</span>
          </div>
        </div>
      </div>

      <div className="floating-cards">
        <div className="tech-card card1">
          <h3>🤖 AI Development</h3>
          <p>Machine Learning & Automation</p>
        </div>

        <div className="tech-card card2">
          <h3>🚁 Drone Training</h3>
          <p>Design & Flight Systems</p>
        </div>

        <div className="tech-card card3">
          <h3>🖨️ 3D Printing</h3>
          <p>Rapid Prototyping</p>
        </div>

        <div className="tech-card card4">
          <h3>🤖 Robotics</h3>
          <p>Robotics in engineering</p>
        </div>
      </div>

      <div className="scroll-indicator">↓ Scroll To Discover</div>
    </section>
  );
}

export default Background;
