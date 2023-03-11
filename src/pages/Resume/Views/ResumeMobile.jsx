import styled from "styled-components";

const MobileStyledView = styled.div`
  background-color: var(--background);
  padding: 0.5em;
`;

const ResumeMobile = () => {
  return (
    <>
      <MobileStyledView>
        {/* Heading */}
        <p className="text-center mb-0">Todd J. Hickam</p>
        <p className="text-center mb-0">1622 S Dogwood St.</p>
        <p className="text-center mb-0">Cornelius, OR 97113</p>
        <p className="text-center mb-0">
          (503) 593-1094 or{" "}
          <a href="mailto:Hickam.T@Outlook.Com">Hickam.T@Outlook.Com</a>
        </p>
        <hr />
        {/* Objective */}
        <h2 className="objective my-2 fs-4">Objective</h2>
        <p className="objective-statement">Obtain front-end web development internship</p>
        {/* Education */}
        <h2 className="education my-2 fs-4">Education</h2>
        <ul className="education">
          <li className="psu">Portland State University 2024
          <p>Candidate for B.S. Computer Science</p></li>
          <li className="pcc">Portland Community College 2020
          <p>A.S. Oregon Transfer Business</p></li>
        </ul>

      </MobileStyledView>
    </>
  );
};

export default ResumeMobile;
