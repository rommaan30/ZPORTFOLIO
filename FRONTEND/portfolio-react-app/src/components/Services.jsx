import react from "react";
import "./services.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
AOS.init();
function Service() {
  return (
    <section
      id="specialization"
      className="height mt- mb-8"
      data-aos="fade-up"
      data-aos-duration="3000"
      style={{
        overflowY: "auto",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#000",
      }}
    >
      <div class="container">
        <h2 className="fs-1">
          My <span className="text-success"> Specialization</span>
        </h2>
        <div class="skills">
          <div class="skill-card" data-aos="fade-up">
            <h3 className="text-success fs-2">MERN Stack</h3>
            <p>
              Expert in MongoDB, Express.js, React.js, and Node.js, building
              full-stack applications.
            </p>
          </div>
          <div class="skill-card" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-success fs-2">Blockchain</h3>
            <p className="fs-0">
              Specialized in decentralized applications (DApps), smart
              contracts, and blockchain technology.
            </p>
          </div>
          <div class="skill-card" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-success fs-2">Git & GitHub</h3>
            <p>
              Proficient in version control, collaboration, and source code
              management using Git and GitHub.
            </p>
          </div>
          <div class="skill-card" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-success fs-2">Kubernetes</h3>
            <p>
              Experience in deploying and managing containerized applications
              using Kubernetes for orchestration.
            </p>
          </div>
          <div class="skill-card" data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-success fs-2">Java & DSA</h3>
            <p>
              Strong foundation in Java programming and Data Structures &
              Algorithms for efficient coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
