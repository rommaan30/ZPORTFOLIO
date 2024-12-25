import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StickyCard = () => {
  return (
    <div
      className="card text-center shadow-lg"
      style={{ width: "300px", borderRadius: "15px" }}
    >
      <img
        src="path-to-your-image.jpg" // Replace with your image path
        className="card-img-top"
        alt="Profile"
        style={{
          borderRadius: "15px 15px 0 0",
          objectFit: "cover",
          height: "200px",
        }}
      />
      <div className="card-body bg-dark text-light">
        <h5 className="card-title">Romman</h5>
        <p className="card-text">Web & Blockchain Developer</p>
        <p className="card-text">Based in Mumbai, IN</p>
        <a href="mailto:hello@drake.design" className="btn btn-success">
          <i className="bi bi-envelope"></i> Hire Me!
        </a>
      </div>
      <div className="card-footer bg-dark border-0">
        <a href="https://instagram.com" className="text-white mx-2">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://twitter.com" className="text-white mx-2">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://github.com" className="text-white mx-2">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default StickyCard;
