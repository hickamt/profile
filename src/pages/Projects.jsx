const Projects = () => {
  return (
    <>
      <h1 className="text-center mt-3">Projects Page</h1>
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
                <h2 className="card-title fs-3 text-center">Project 1</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <button className="btn btn-secondary">Link</button>
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
                <h2 className="card-title fs-3 text-center">Project 2</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <button className="btn btn-secondary">Link</button>
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
