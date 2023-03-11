import styled from "styled-components";
import folderImage from "./white_folder.png";
import github from "./github.png";
import stackblitz from "./stackblitz.png";

const ProjectStyles = styled.div`
  margin-top: 4em;

  .card {
    border-radius: 0.5em;
    opacity: 90%;
  }
  .card-body {
    opacity: none;
    min-height: 220px;
  }

  img.card-img-top {
    max-height: 346px;
  }

  .custom-button {
    width: auto;
    height: 3em;
  }

  @media (max-width: 748px) {
    margin-top: 0;
    .card {
      margin: 1em 2em;
    }
    .card-body {
      min-height: 190px;
    }
  }
`;
const projects = [
  {
    id: 0,
    imgSrc: folderImage,
    title: "HttpOnly",
    description:
      "Ongoing project template with ReactJS & ExpressJS using HTTP Only Cookie",
    buttonIMG: stackblitz,
  },
  {
    id: 1,
    imgSrc: folderImage,
    cardIMG: folderImage,
    title: "PSU Shell",
    description:
      "Custom shell exhibiting redirects, piping, and other standard exec() commands",
    buttonIMG: github,
  },
  {
    id: 2,
    imgSrc: folderImage,
    title: "Pthreads",
    description:
      "Find all primes to one-billion using multi-thread processing and mutex locks",
    buttonIMG: github,
  },
];

// implemented mapping across cards and formatting broke for row.
// I had no idea if it was my implementation, an issue with mapping and bootstrap, or
// if I had deleted a required div.className.
// Resolution: reviewed GitHub revision history and saw that one of the divs had to be
// mapped inside and was placed outside
const Projects = () => {
  return (
    <>
      <ProjectStyles>
      <h1 className="text-center mt-3" hidden>
        Personal and Collegiate Programs
      </h1>
      <div className="container">
        <div className="row mx-auto">
          {projects.map((project) => {
            return (
              <div className="col-md-4 col-sm-12">
                <div key={project.id} className="card bg-dark">
                  <img src={project.imgSrc} alt="" className="card-img-top" />
                  <div className="card-body bg-white text-dark text-center">
                    <h2 className="card-title fs-3 text-center">
                      {project.title}
                    </h2>
                    <p className="card-text">{project.description}</p>
                    <a
                      href="https://stackblitz.com/github/hickamt/HTTP_Only_App_Template"
                      target="_blank"
                      className="project1">
                      <img
                        className="custom-button"
                        src={project.buttonIMG}
                        alt="image of stackblitz button"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </ProjectStyles>
    </>
  );
};

export default Projects;
