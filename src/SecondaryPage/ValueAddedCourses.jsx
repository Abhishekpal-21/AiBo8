import { Link } from "react-router-dom";
import "../App.css";

function ValueAddedCourses() {
  const courses = [
    {
      title: "Python Programming",
      icon: "🐍",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Master Python fundamentals, OOP, automation, web development and AI programming.",
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      duration: "2 Weeks",
      level: "Intermediate",
      description:
        "Build intelligent systems using ML, Deep Learning, Computer Vision and NLP.",
    },
    {
      title: "Internet of Things",
      icon: "🌐",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Develop smart IoT solutions using Arduino, ESP32, sensors and cloud platforms.",
    },
    {
      title: "Data Analytics",
      icon: "📊",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Analyze business data using Excel, SQL, Power BI and Python.",
    },
    {
      title: "Data Science",
      icon: "📈",
      duration: "2 Weeks",
      level: "Intermediate",
      description:
        "Learn data visualization, statistics and predictive machine learning models.",
    },
    {
      title: "Full Stack",
      icon: "💻",
      duration: "2 Weeks",
      level: "Advanced",
      description:
        "Develop responsive web applications using MERN Stack technologies.",
    },
    {
      title: "Robotics",
      icon: "🤖",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Build intelligent robots with sensors, actuators and embedded systems.",
    },
    {
      title: "Arduino",
      icon: "⚡",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Programming, electronics, sensors and automation using Arduino boards.",
    },
    {
      title: "Raspberry Pi",
      icon: "🍓",
      duration: "2 Weeks",
      level: "Intermediate",
      description:
        "Develop Linux-based embedded applications and IoT solutions.",
    },
    {
      title: "Drone Technology",
      icon: "🚁",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Learn drone assembly, flight control, mapping and autonomous navigation.",
    },
    {
      title: "3D Printing",
      icon: "🖨️",
      duration: "2 Weeks",
      level: "Beginner",
      description:
        "Design CAD models and manufacture prototypes using modern 3D printers.",
    },
  ];

  return (
    <div className="value-page">
      {/* Hero */}

      <section className="value-hero">
        <span className="hero-tag">
          🚀 Industry Ready Certification Programs
        </span>

        <h1>
          Value Added <span>Courses</span>
        </h1>

        <p>
          Enhance your academic journey with practical, project-based
          certification courses designed by industry experts. Learn emerging
          technologies through live sessions, hands-on projects and
          internationally relevant skills.
        </p>
      </section>

      {/* Courses */}

      <section className="courses-section">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-icon">{course.icon}</div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-details">
                <span>⏳ {course.duration}</span>

                <span>🎯 {course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}

      <section className="why-section">
        <h2>Why Choose Our Courses?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>👨‍🏫 Expert Mentors</h3>
            <p>Learn directly from experienced industry professionals.</p>
          </div>

          <div className="why-card">
            <h3>🛠 Live Projects</h3>
            <p>Gain practical knowledge through real-world projects.</p>
          </div>

          <div className="why-card">
            <h3>🏆 Certification</h3>
            <p>Receive industry-recognized certificates after completion.</p>
          </div>

          <div className="why-card">
            <h3>💼 Career Support</h3>
            <p>Resume building, interview guidance and placement assistance.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="contact-section">
        <h2>Ready to Upgrade Your Skills?</h2>

        <p>
          Join our value-added courses and become industry-ready with practical
          learning and certifications.
        </p>

        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default ValueAddedCourses;
