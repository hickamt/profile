import styled from "styled-components";
import psuImage from "./white_folder_green_psu.png";

const ProjectStyles = styled.div`
  margin-top: 4em;

  .card {
    border-radius: 0.5em;
    // margin: 1em 0;
    opacity: 90%;
  }
  .card-body {
    opacity: none;
    min-height: 200px;
  }

  img.card-img-top {
    max-height: 346px;
  }

  @media (max-width: 748px) {
    margin-top: 0;
    .card {
      margin: 1em 2em;
    }
  }
`;


const Projects = () => {
  return (
    <>
      <ProjectStyles>
        <h1 className="text-center mt-3" hidden>
          Personal and Collegiate Programs
        </h1>
        <div className="container">
          <div className="row mx-auto">
            {/* Card One */}
            <div className="col-md-4 col-sm-12">
              <div className="card bg-dark">
                <img
                  src={psuImage}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body bg-white text-dark text-center">
                  <h2 className="card-title fs-3 text-center">HttpOnly</h2>
                  <p className="card-text">
                    Ongoing project template with ReactJS & ExpressJS using HTTP
                    Only Cookie
                  </p>
                  <a
                    href="https://github.com/hickamt/HTTP_Only_App_Template"
                    target="_blank"
                    className="project1 application">
                    <button className="btn btn-secondary">App</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="col-md-4 col-sm-12">
              <div className="card bg-dark">
                <img
                  src={psuImage}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body bg-white text-dark text-center">
                  <h2 className="card-title fs-3 text-center">PSU Shell</h2>
                  <p className="card-text">
                    Custom shell exhibiting redirects, piping, and other
                    standard exec() commands.
                  </p>
                  <a
                    href="https://github.com/hickamt/PSU-Shell"
                    target="_blank"
                    className="project2 shell">
                    <button className="btn btn-secondary">Shell</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Card Three */}
            <div className="col-md-4 col-sm-12">
              <div className="card bg-dark">
                <img
                  src={psuImage}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body bg-white text-dark text-center">
                  <h2 className="card-title fs-3 text-center">Pthreads</h2>
                  <p className="card-text">
                    Find all primes to one-billion using 
                    multi-thread and mutex process
                  </p>
                  <button className="btn btn-secondary">Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Projects;
