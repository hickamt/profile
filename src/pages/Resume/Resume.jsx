import React from "react";
import { useState, useEffect } from "react";
import ResumePDF from "./Todd_Hickam_Resume_2023.pdf";
const pdfView = `${ResumePDF}#view=fitH`;

const ResumeIFrame = () => {
  return (
    <div className="row justify-content-evenly">
      <h1 className="resume-heading text-center">Resume Wide Screen</h1>
      <iframe
        className="iframe-resume"
        src={pdfView}
        height="725px"
        frameborder="0"></iframe>
    </div>
  );
};

const ResumeMobile = () => {
  return (
    <div className="row justify-content-evenly">
      <h1 className="resume-heading text-center">Resume Mobile</h1>
      <iframe
        className="iframe-resume"
        src={pdfView}
        height="725px"
        frameborder="0"></iframe>
    </div>
  );
};

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
      <div className="resume d-col justify-content-center">
        {windowSize[0] < 760 ? <ResumeMobile /> : <ResumeIFrame />}
      </div>
    </>
  );
};

export default Resume;
