import React from "react";
import styled from "styled-components";
import ResumeBody from "./ResumeBody";

const ResumeStyle = styled.div`
  margin: auto;
  background-color: var(--background);
  padding: 1em;
  opacity: 90%;

  @media (min-width: 680px) {
    max-width: 65rem;
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
