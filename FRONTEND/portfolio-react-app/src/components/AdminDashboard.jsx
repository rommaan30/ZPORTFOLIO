import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const [resumeData, setResumeData] = useState({
    education: [],
    experience: [],
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/admin/dashboard", {
        headers: { Authorization: token },
      });
      setMessage(res.data.message);
    };

    fetchDashboard();
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/resume")
      .then((response) => {
        console.log("Resume Data:", response.data);
        setResumeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resume data:", error);
      });
  }, []);

  return <h1>{message}</h1>;
};

export default AdminDashboard;
