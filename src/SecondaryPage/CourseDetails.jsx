import { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "./courseData";
import "../Secondary.css";

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses[courseId];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: course?.title || "",
  });

  const [errors, setErrors] = useState({});

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Enrollment Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        course: course.title,
      });

      setErrors({});
    }
  };

  return (
    <div className="course-page">
      <div className="course-left">
        <span className="course-badge">🚀 Industry Ready Training Program</span>

        <h1>{course.title}</h1>

        <p>{course.description}</p>

        <div className="course-info">
          <div>
            <h3>Duration</h3>
            <span>{course.duration}</span>
          </div>

          <div>
            <h3>Level</h3>
            <span>{course.level}</span>
          </div>
        </div>

        <div className="feature-grid">
          {course.features.map((feature, index) => (
            <div key={index} className="feature-card">
              ✓ {feature}
            </div>
          ))}
        </div>

        <button className="syllabus-btn">Download Syllabus</button>
      </div>

      <div className="course-right">
        <h2>Start Learning Today</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Enter Mobile Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
          />
          {errors.college && <span className="error">{errors.college}</span>}
          <select name="course" value={Selection} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Python Programming">Python</option>
            <option value="Artificial Intelligence & Machine Learning">
              AI / ML
            </option>
            <option value="Internet of Things">IoT</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science">Data Science</option>
            <option value="Full Stack Development">Full Stack</option>
            <option value="Robotics Engineering">Robotics</option>
            <option value="Arduino Programming">Arduino</option>
            <option value="Raspberry Pi">Raspberry Pi</option>
            <option value="Drone Technology">Drone Technology</option>
            <option value="3D Printing">3D Printing</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
          <button type="submit">Enroll Now</button>
        </form>
      </div>
    </div>
  );
}

export default CourseDetails;
