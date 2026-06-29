import "../App.css";
function CareerContact() {
  return (
    <section className="career-form-section">
      <div className="career-form-container">
        <h2>Join Our Team</h2>
        <p>
          Ready to build the future with AI, Robotics, IoT, and Drone
          Technologies? Submit your application and we'll get in touch.
        </p>

        <form className="career-form">
          <div className="form-grid">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Current Location" />

            <input type="text" placeholder="Position Applying For" />
            <input type="text" placeholder="College / University" />

            <input type="url" placeholder="LinkedIn Profile" />
            <input type="url" placeholder="Portfolio / GitHub" />
          </div>

          <textarea rows="5" placeholder="Tell us about yourself..."></textarea>

          <div className="resume-upload">
            <label htmlFor="resume">📄 Upload Resume (PDF/DOC/DOCX)</label>
            <input type="file" id="resume" accept=".pdf,.doc,.docx" />
          </div>

          <button type="submit">Submit Application →</button>
        </form>
      </div>
    </section>
  );
}
export default CareerContact;
