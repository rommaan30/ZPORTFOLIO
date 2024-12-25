import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css"; // For additional styling (if needed)

const Home = () => {
  return (
    <div className="">
      <div className="">
        {/* Main Content */}
        <div className="main-content ">
          <p className="lead fs-5">
            Passionate about merging the dynamic MERN stack with cutting-edge
            blockchain development.
          </p>
          <h1 className="display-4">
            Say Hi from <span className="text-success">Romman</span>, Web and
            Blockchain Developer
          </h1>
          {/* Placeholder for scrollable content */}
        </div>
      </div>

      {/* Fixed Right Icons */}
      <div className="right-icons col-md-1">
        <div className="icon">
          <i className="bi bi-house"></i>
        </div>
        <div className="icon">
          <i className="bi bi-person"></i>
        </div>
        <div className="icon">
          <i className="bi bi-briefcase"></i>
        </div>
        <div className="icon">
          <i className="bi bi-envelope"></i>
        </div>
        <div className="icon">
          <i className="bi bi-chat"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
