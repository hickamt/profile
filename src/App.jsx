import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Layout from "./shared/Layout";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Form/Contact";
import NoMatch from "./pages/NoMatch404/NoMatch";
import Home from "./pages/Home/Home";

// Styles
import "./styles/home.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          {/* Catch all 404 */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
