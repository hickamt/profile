import styled from "styled-components";
import CardBody from "./component/CardBody";
import { projects } from "./data/ProjectData";

const ProjectStyles = styled.div`
  margin-top: 4em;

  .card {
    opacity: 90%;
    border-radius: 1em;
    // max-width: 300px;
  }

  div.body {
    min-height: 200px;
  }

  .custom-button {
    width: auto;
    height: 3em;
    margin-top: 0.5em;
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
              return <CardBody key={project.id} {...project} />;
            })}
          </div>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Projects;
