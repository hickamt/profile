import React from "react";
import pdf from "../assets/Todd_Hickam_Resume_2023.pdf";

const Resume = () => {
  return (
    <>
      <div className="resume d-col justify-content-center">
        <div className="row justify-content-evenly">
          <h1 className="resume-heading text-center">Resume</h1>
        <iframe
          className="iframe-resume"
          src={pdf}
          // width="90%"
          height="750px"
          frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
