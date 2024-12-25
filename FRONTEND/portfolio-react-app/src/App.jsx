import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyCard from "./components/StickyCard";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/resume";
import Service from "./components/Services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <StickyCard />
              <Home />
              <About />
              <Resume />
              <Service />
              <Form />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
