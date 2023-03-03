import React from "react";
import pdf from "../assets/Todd_Hickam_Resume_2023.pdf";

const Resume = () => {
  return (
    <>
      <div className="resume justify-content-center">
        <h1 className="resume-heading text-center">Todd Hickam | Resume</h1>
        <iframe
          className=""
          src={pdf}
          width="90%"
          height="500px"
          frameborder="0"></iframe>
      </div>
    </>
  );
};

export default Resume;
