// Project Notes
/* 
 Implemented mapping across cards and formatting broke for row.
 I had no idea if it was my implementation, an issue with mapping and bootstrap, or
 if I had deleted a required div.className.
 Resolution: reviewed GitHub revision history and saw that one of the divs had to be
 mapped inside and was placed outside
*/

import React from "react";
import styled from "styled-components";
import CardBody from "./component/CardBody";
import { projects } from "./data/ProjectData";

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
              <CardBody key={project.id} {...project} />;
            })}
          </div>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Projects;
