import styled from "styled-components";
import { ProjectCard } from "./component/CardBody";
import { projects } from "./data/ProjectData";

const ProjectStyles = styled.div`
  margin-top: 4em;

  .row {
    width: auto;
    height: auto;
  }

  .card-body {
    opacity: 90%;
  }

  .card {
    border-radius: 1em;
  }

  .body {
    min-height: 200px;
    padding-top: 1em;
  }

  .custom-button {
    width: auto;
    height: 3em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .card-img-top {
    width: 85%;
    align-self: center;
  }

  @media (max-width: 748px) {
    margin: 1em;
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
            {projects.map((project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Projects;
