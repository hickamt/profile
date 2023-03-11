import React from "react";
import ResumeBody from "./ResumeBody";
import styled from "styled-components";

const ResumeStyle = styled.div`
  margin: auto;
  background-color: var(--background);
  padding: 0.5em;
  opacity: 90%;

  @media (min-width: 680px) {
    max-width: 75rem;
  }
`;

const Resume = () => {
  return (
    <>
      <ResumeStyle>
        <div className="resume d-col justify-content-center my-0">
          <h1 className="resume-heading text-center" hidden>
            Resume
          </h1>
          <ResumeBody />
        </div>
      </ResumeStyle>
    </>
  );
};

export default Resume;
