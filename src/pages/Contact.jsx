const Contact = () => {
  return (
    <>
      <form id="form" class="form mx-auto mt-5 py-4 px-3 rounded">
        <div class="row mb-2">
          <h1 class="fs-2 fw-bold text-center">CONTACT FORM</h1>
        </div>
        <div class="row mb-3 mt-3">
          <label for="text" class="col-sm-4 col-form-label">
            Username:
          </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="text" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="email" class="col-sm-4 col-form-label">
            Email:
          </label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="email" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="password" class="col-sm-4 col-form-label">
            Password:
          </label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="password" />
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label pt-0">
            Would you like to sign up for the newsletter?
          </legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="yes"
              />
              <label class="form-check-label" for="gridRadios1">
                Yes, sign me up
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="no"
              />
              <label class="form-check-label" for="gridRadios2">
                No, thank you
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row mb-3">
          <label for="date" class="col-sm-4 col-form-label">
            Date:
          </label>
          <div class="col-sm-8">
            <input type="date" class="form-control" id="date" />
          </div>
        </div>
        <div class="d-flex gap-1 justify-content-center py-2">
          <button
            id="submit"
            type="submit"
            class="btn w-25 btn-primary btn-block">
            Submit
          </button>
          <button
            id="reset"
            type="reset"
            class="btn w-25 btn-secondary btn-block">
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
