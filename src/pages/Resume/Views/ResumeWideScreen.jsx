import ResumePDF from "./Todd_Hickam_Resume_2023.pdf";
const pdfView = `${ResumePDF}#view=fitH`;

const ResumeWideScreen = () => {
  return (
    <div className="row justify-content-evenly">
      <iframe
        className="iframe-resume"
        src={pdfView}
        height="725px"
        frameBorder="0"></iframe>
    </div>
  );
};

export default ResumeWideScreen;
