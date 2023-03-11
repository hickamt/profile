import React from "react";
import { useState, useEffect } from "react";

import ResumeMobile from "./Views/ResumeMobile";
import ResumeWideScreen from "./Views/ResumeWideScreen";

const Resume = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <div className="resume d-col justify-content-center my-0">
        <h1 className="resume-heading text-center" hidden>Resume</h1>
        {windowSize[0] < 800 ? <ResumeMobile /> : <ResumeWideScreen />}
      </div>
    </>
  );
};

export default Resume;
