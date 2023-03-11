import React from "react";
import ResumePDF from "./Todd_Hickam_Resume_2023.pdf";

const ResumeBody = () => {
  const downloadPDF = () => {
    fetch(ResumePDF).then((response) => {
      response.blob().then((blob) => {
        const pdfFILE = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = pdfFILE;
        alink.download = "./Todd_Hickam_Resume_2023.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      {/* Heading */}
      <div className="contact-details text-center">
        <p className="mb-0">Todd J. Hickam</p>
        <p className="mb-0">1622 S Dogwood St.</p>
        <p className="mb-0">Cornelius, OR 97113</p>
        <p className="mb-3">
          (503) 593-1094 or{" "}
          <a className="text-light" href="mailto:Hickam.T@Outlook.Com">
            Hickam.T@Outlook.Com
          </a>
        </p>
        <a className="btn btn-secondary" onClick={downloadPDF}>
          Resume
        </a>
      </div>
      <hr />
      {/* Objective */}
      <h2 className="objective my-2 fs-4">Objective</h2>
      <p className="objective-statement ms-4">
        Obtain front-end web development internship
      </p>
      <hr />
      {/* Education */}
      <h2 className="education my-2 fs-4">Education</h2>
      <ul className="education">
        <li className="psu">
          Portland State University&emsp;&emsp;&ensp; (PSU) 2024
          <p className="ms-2">Candidate for B.S. Computer Science</p>
        </li>
        <li className="pcc">
          Portland Community College&emsp;(PCC) 2020
          <p className="ms-2">A.S. Oregon Transfer Business</p>
        </li>
      </ul>
      <hr />
      {/* Work Experience */}
      <h2 className="work-experience my-2 fs-4">Work Experience</h2>
      <ul className="work-experience">
        {/* First Position */}
        <h3 className="company-one mt-1 fs-5">All Car Care</h3>
        <p className="position">Manager</p>
        <ul className="description">
          <li className="all-car-care">
            Consulted the owner on areas of service efficiency, employee
            management, and profitability
          </li>
          <li className="all-car-care">
            Increased overall profit margin by 33%, utilizing customer sales and
            vendor re-pricing strategies
          </li>
        </ul>
        {/* Second Position */}
        <h3 className="company-two mt-1 fs-5">Wells Fargo</h3>
        <p className="position">Loss Mitigation / Home Preservation</p>
        <ul className="description">
          <li className="wells-fargo">
            Accurately maintained over one-hundred home preservation accounts at
            various stages of default, requiring strong diligence to detail and
            organization
          </li>
          <li className="wells-fargo">
            Utilized multiple systems to inform current and new customer
            inquiries about loan terms, critical dates, and deadlines
          </li>
        </ul>
        {/* Third Position */}
        <h3 className="company-three mt-1 fs-5">Elite Converter Resource</h3>
        <p className="position">Owner</p>
        <ul className="description">
          <li className="elite-converter-resource">
            Constructed a system of re-building domestic and foreign catalytic
            converter vehicle emission components
          </li>
          <li className="elite-converter-resource">
            Developed business to business relationships, and new vendor
            suppliers in the Oregon, Washington, and florida markets
          </li>
        </ul>
        {/* Fourth Position */}
        <h3 className="company-three mt-1 fs-5">NW Home Lending</h3>
        <p className="position">Owner</p>
        <ul className="description">
          <li className="nw-home-lending">
            Established professional relationships with real estate developers,
            sub-prime lenders, real estate agents and brokers, attorneys,
            appraisers, and loan officers
          </li>
          <li className="nw-home-lending">
            Negotiated short sale foreclosure contracts with various lenders,
            and negotiated property investments for various clientele
          </li>
        </ul>
      </ul>
      <hr />
      {/* Award & Honors */}
      <h2 className="awards-honors my-2 fs-4">Awards / Honors</h2>
      <ul>
        <li className="awards-honors mb-0">Presidents List - PSU</li>
        <li className="awards-honors mb-0">Presidents List - PCC</li>
        <li className="awards-honors mb-0">Graduated Highest Honors PCC</li>
      </ul>
      <hr />
      {/* Skills */}
      <h2 className="skills fs-4">Skills</h2>
      <div className="skills ms-4">
        <p className="skills mb-1">
          Over a decade of effective leadership, small business operations,
          customer service, and professional business relations
        </p>
        <p className="skills mb-1">
          Extensive technical writing and communications ability
        </p>
        <p className="skills mb-1">
          Computer Languages:
          <ul className="languages">
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </p>
        <p className="skills mb-1">
          Frameworks / Libraries:
          <ul className="frameworks">
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Bootstrap</li>
          </ul>
        </p>
        <p className="skills mb-1">
          Editors:
          <ul className="editors">
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>VIM</li>
          </ul>
        </p>
        <p className="skills mb-1">
          Operating Systems:
          <ul className="operating-systems">
            <li>Microsoft Windows</li>
            <li>Linux/Unix</li>
          </ul>
        </p>
        <p className="skills mb-1">
          Command Prompt / Shell:
          <ul className="command-shell">
            <li>Terminal</li>
            <li>PowerShell</li>
            <li>Command Prompt</li>
          </ul>
        </p>
        <p className="skills mb-1">
          Software:
          <ul className="software">
            <li>Microsoft Office Suite</li>
            <li>Adobe</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default ResumeBody;
