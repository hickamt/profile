import { projects } from "../data/ProjectData";

const CardBody = () => {
   const card = projects.map((project) => {
      return (
        <div className="col-md-4 col-sm-12">
          <div key={project.id} className="card bg-dark">
            <img src={project.cardSrc} alt="" className="card-img-top" />
            <div className="card-body bg-white text-dark text-center">
              <h2 className="card-title fs-3 text-center">{project.title}</h2>
              <p className="card-text">{project.description}</p>
              <a
                href="https://stackblitz.com/github/hickamt/HTTP_Only_App_Template"
                target="_blank"
                className="project1">
                <img
                  className="custom-button"
                  src={project.buttonSrc}
                  alt="image of stackblitz button"
                />
              </a>
            </div>
          </div>
        </div>
      );
    });
    return card;
};

export default CardBody;