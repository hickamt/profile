import styled from "styled-components";

const FormStyle = styled.div`
  form.form {
    margin-top: 4em;
    border-radius: 0.5em;
    opacity: 95%;
    width: 500px;
    // padding: 2em;
  }

  fieldset.row {
    margin-left: 7em;
  }

  label[for="text_first"],
  label[for="text_last"],
  label[for="email"] {
    visibility: hidden;
  }

  @media (max-width: 680px) {
    form.form {
      border-radius: 0;
      margin-top: 0;
      max-width: 100%;
      max-height: auto;
    }

    fieldset.row {
      margin-left: 0;
    }

    label[for="text_first"],
    label[for="text_last"],
    label[for="email"] {
      visibility: visible;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <FormStyle>
        <form id="form" className="form mx-auto bg-dark py-4 px-3">
          <div className="row mb-2">
            <h1 className="fs-2 fw-bold text-center">CONTACT FORM</h1>
          </div>
          <div className="row mb-3 mt-3 justify-content-center">
            <label for="text_first">First Name</label>
            <div className="col-md-8 col-sm-12">
              <input
                placeholder="First"
                type="text"
                className="form-control"
                id="text_first"
              />
            </div>
          </div>
          <div className="row mb-3 mt-3 justify-content-center">
            <label for="text_last">Last Name</label>
            <div className="col-md-8 col-sm-12">
              <input
                placeholder="Last"
                type="text"
                className="form-control"
                id="text_last"
              />
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label for="email">Email</label>
            <div className="col-md-8 col-sm-12">
              <input
                placeholder="Email"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label pt-0">
              Get alerts on my future projects?
            </legend>
            <div className="">
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
          <div className="d-flex gap-1 justify-content-center py-2">
            <button
              id="submit"
              type="submit"
              className="btn w-25 btn-info btn-block">
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
      </FormStyle>
    </>
  );
};

export default Contact;
