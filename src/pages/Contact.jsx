import React from "react";

const testArray = [];


const Contact = () => {
  return (
    <>
      <form id="form" className="form mx-auto mt-5 py-4 px-3 rounded">
        <div className="row mb-2">
          <h1 className="fs-2 fw-bold text-center">CONTACT FORM</h1>
        </div>
        <div className="row mb-3 mt-3">
          <label for="text" className="col-sm-2 col-form-label">
            {/* First: */}
          </label>
          <div className="col-sm-8">
            <input placeholder="First name" type="text" className="form-control" id="text" />
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <label for="text" className="col-sm-2 col-form-label">
            {/* Last: */}
          </label>
          <div className="col-sm-8">
            <input placeholder="Last name" type="text" className="form-control" id="text" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="email" className="col-sm-2 col-form-label">
            {/* Email: */}
          </label>
          <div className="col-sm-8">
            <input placeholder="Email" type="email" className="form-control" id="email" />
          </div>
        </div>
        <fieldset className="row mb-3 justify-content-center">
          <legend className="col-form-label pt-0 text-center">
            Get alerts on my future projects?
          </legend>
          <div className="col-sm-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="yes"
              />
              <label className="form-check-label" for="gridRadios1">
                Yes, sign me up
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="no"
              />
              <label className="form-check-label" for="gridRadios2">
                No, thank you
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <label for="date" className="col-sm-2 col-form-label">
            {/* Date: */}
          </label>
          <div className="col-sm-8">
            <input type="date" className="form-control" id="date" />
          </div>
        </div>
        <div className="d-flex gap-1 justify-content-center py-2">
          <button
            id="submit"
            type="submit"
            className="btn w-25 btn-success btn-block">
            Submit
          </button>
          <button
            id="reset"
            type="reset"
            className="btn w-25 btn-secondary btn-block">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;

// function radioCheck() {
//   let radio1 = document.getElementById("gridRadios1");
//   let radio2 = document.getElementById("gridRadios2");
//   if (radio1.checked) return radio1.value;
//   if (radio2.checked) return radio2.value;
//   return "No Newsletter Submission";
// }

// function dateValidation() {
//   let date = document.getElementById("date").value;
//   return date === "" ? "No Submission" : date;
// }

// function emailValidation() {
//   let email = document.getElementById("email").value;
//   return email === "" ? "No Submission" : email;
// }

// function usernameValidation() {
//   let username = document.getElementById("text").value;
//   return username === "" ? "No Submission" : username;
// }

// function inputVerification() {
//   return document.getElementById("text") === "" ||
//     document.getElementById("email").value === ""
//     ? false
//     : true;
// }

// document.getElementById("form").addEventListener("submit", (event) => {
//   if (inputVerification() === false) {
//     console.log("You must enter a username and email to submit the form");
//   } else {
//     let header = "========== Form Submission ==========";
//     console.log(
//       header,
//       "\nUsername:\t",
//       usernameValidation(),
//       "\nEmail:\t\t",
//       emailValidation(),
//       "\nNewsletter:\t",
//       radioCheck(),
//       "\nDate:\t\t",
//       dateValidation()
//     );
//   }
//   event.preventDefault();
// });
