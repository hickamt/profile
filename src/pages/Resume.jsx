import React from "react";
import ReactMarkdown from "react-markdown";

const resume = `
Todd J. Hickam

1622 S Dogwood St.

Cornelius, OR 97113

(503) 593-1094 or [Hickam.T@Outlook.Com](mailto:Hickam.T@Outlook.Com)

**Objective**

Obtain front-end web development internship

**Education**

**Portland State University, Portland, OR**

Candidate for B.S. degree in Computer Science

  - Minor: Business and Math

**Portland Community College, Portland, OR**

Associate of Science – Oregon Transfer Business

**Work Experience**

**All Car Care LLC – Manager**

  - Consulted the owner on areas of service efficiency, employee management, and profitability
  - Increased overall profit margin by 33% during the 8-month tenure, utilizing customer sales and vendor pricing strategies

**Wells Fargo**

_Loss Mitigation / Home Preservation_

_Phone Banker 2_

- Accurately maintained over one-hundred home preservation accounts at various stages of default, requiring strong diligence
- Utilized multiple systems to inform current and new customer inquiries about loan terms, critical dates, and deadlines

**Elite Converter Resource – Owner**

- Constructed a system of re-building domestic and foreign catalytic converter vehicle emission components
- Developed business to business relationships, and new vendor suppliers in the Oregon, Washington, and Florida markets

**NW Home Lending – Owner**

- Established professional relationships with real estate developers, sub-prime lenders, real estate agents and brokers, attorneys, appraisers, and loan officers
- Negotiated short sale foreclosure contracts with various lenders, and negotiated property investments for various clientele

**Awards/Honors**

- Presidents List – Portland State University
- Presidents List - Portland Community College
- Phi Theta Kappa, International Honor Society

**Skills**

- 15 years of affective leadership and small business operations
- 20 years of customer service, and professional business relations
- 1 year of math tutoring at Portland Community College across Math 60 to Calculus II
- Extensive technical writing and communications ability
- Computer Languages: C/C++, Java, JavaScript, Typescript, HTML, CSS, SCSS
- Frameworks & Libraries: ReactJS, NodeJS, Webpack
- Editors: Visual Studio Code, VIM
- Command Line: Terminal, PowerShell
- Operating Systems: Microsoft Windows, Linux/Ubuntu
- Software: Microsoft Office Excel, Word, PowerPoint, OneNote, Outlook,

Adobe Acrobat Reader, Adobe Lightroom Classic, Explorer/Edge, Fire Fox, Google, Propellerhead Reason 10`;

const Resume = () => {
  return (
    <>
      <div className="container resume">
        <ReactMarkdown children={resume} />
      </div>
    </>
  );
};

export default Resume;
