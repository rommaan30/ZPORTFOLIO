// import React, { useEffect, useState } from "react";
// import "aos/dist/aos.css"; // Import AOS styles
// import AOS from "aos"; // Import AOS library
// import axios from "axios"; // Import axios for data fetching
// import "./About.css";

// // Initialize AOS
// AOS.init();

// const About = () => {
//   const [aboutData, setAboutData] = useState({}); // State to hold fetched data

//   // Fetching data from the backend when the component mounts
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/about"); // Make sure this endpoint is correct
//         setAboutData(response.data); // Set the fetched data in state
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//       }
//     };

//     fetchAboutData(); // Call the function to fetch data
//   }, []); // Empty array means it will only run once when the component mounts

//   return (
//     <section
//       id="about"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//       style={{
//         overflowY: "auto",
//         height: "50vh",
//         padding: "40px",
//         backgroundColor: "#000",
//       }}
//     >
//       <div className="main-content zl">
//         <div className="about-section">
//           <h2 className="text-center mb-4 mt-4">
//             <span>About Me</span>
//             <div>
//               Building Ideas,{" "}
//               <span className="text-success">Creating Solutions</span>
//             </div>
//           </h2>
//           <p className="text-center fs-5">
//             {/* Display fetched title or a fallback */}
//             {aboutData.title ||
//               "Hello! I am a passionate Web Developer with expertise in creating dynamic and responsive websites."}
//           </p>
//           <p className="text-center fs-5">
//             {/* Display fetched description or a fallback */}
//             {aboutData.description ||
//               "My goal is to deliver clean and efficient code that translates into visually stunning and user-friendly experiences. I specialize in modern web technologies like React.js, Node.js, and more. Let's work together to bring your ideas to life!"}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// pages/index.js
import React from "react";

export async function getServerSideProps() {
  // Fetch data from MongoDB
  const data = await getMongoData("AboutUs");

  return {
    props: {
      items: JSON.parse(JSON.stringify(data)), // To handle serialization
    },
  };
}

export default function HomePage({ items }) {
  return (
    <div>
      <h1>MongoDB Data</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id || item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
