import * as React from "react";
import { Routes, Route } from "react-router-dom";

// JSX Pages
import Layout from "./shared/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

// Page Styles
import "./App.css";
import "./styles/contact.css";
import "./styles/home.css";
import "./styles/no-match.css";
import "./styles/projects.css";
import "./styles/resume.css";
import { ImgHome } from "./pages/ImgHome/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImgHome />} />
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
