import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [resumeData, setResumeData] = useState({
    education: [],
    experience: [],
  });

  // Fetch resume data from thea backend
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch("/api/resume-data"); // Update this URL as needed
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error.message);
      }
    };

    fetchResumeData();
  }, []); // Only runs once when the component mounts

  return (
    <div className="portfolio">
      <h1>Resume</h1>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        {resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          ))
        ) : (
          <p>No education details available.</p>
        )}
      </section>

      {/* Experience Section */}
      <section>
        <h2>Experience</h2>
        {resumeData.experience.length > 0 ? (
          resumeData.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience details available.</p>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
