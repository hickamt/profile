import ResumePDF from "./Todd_Hickam_Resume_2023.pdf";
const pdfView = `${ResumePDF}#view=fitH`;

const ResumeWideScreen = () => {
  return (
    <div className="row justify-content-evenly">
      <h1 className="resume-heading text-center">Resume Wide Screen</h1>
      <iframe
        className="iframe-resume"
        src={pdfView}
        height="725px"
        frameBorder="0"></iframe>
    </div>
  );
};

export default ResumeWideScreen;
