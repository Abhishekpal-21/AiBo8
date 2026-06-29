import { useState } from "react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Enquiry Form</h1>
        <p>
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="organization"
            placeholder="School / College / Company"
            value={formData.organization}
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="AI Lab Setup">AI Lab Setup</option>
            <option value="Robotics Training">Robotics Training</option>
            <option value="Drone Technology">Drone Technology</option>
            <option value="IoT Solutions">IoT Solutions</option>
            <option value="Workshop">Workshop</option>
            <option value="Value Added COurse">Value Added Course</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Describe your requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}
