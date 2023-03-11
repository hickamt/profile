import styled from "styled-components";

const MobileStyledView = styled.div`
  background-color: var(--background);
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
        {/*  */}
      </MobileStyledView>
    </>
  );
};

export default ResumeMobile;
