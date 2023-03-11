const Projects = () => {
  return (
    <>
      <h1 className="text-center mt-3">Projects</h1>
      <div className="container">
        <div className="row mx-auto">
          {/* Card One */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="white_folder_green_psu.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body bg-white text-dark text-center">
                <h2 className="card-title fs-3 text-center">HTTP Only</h2>
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="white_folder_green_psu.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body bg-white text-dark text-center">
                <h2 className="card-title fs-3 text-center">PSU Shell</h2>
                <p className="card-text">
                  Custom shell exhibiting redirects, piping, and other standard
                  exec() commands.
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="white_folder_green_psu.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body bg-white text-dark text-center">
                <h2 className="card-title fs-3 text-center">Project 3</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <button className="btn btn-secondary">Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
