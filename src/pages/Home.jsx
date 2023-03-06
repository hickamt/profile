// import { profileIMG } from "../assets/img/Todd_Hickam_Zeke.jpg";

const Home = () => {
  return (
    <>
      <div className="container-md rounded-2 profile-body mt-4">
        <div className="row mx-auto py-4">
          <div className="col-lg-4 col-sm-12 profile-image">
            <img
              className="profile-image rounded-2"
              src=""
              alt="headshot of Todd Hickam width 300 by height of 300"
            />
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <h1 className="fs-2">Todd Hickam</h1>
            <p className="introduction-body text-start">
              Portland, Oregon Resident
            </p>
            <p className="introduction-body text-start">
              Computer Science Undergrad
            </p>
            <p className="introduction-body text-start">Web Dev Passionate</p>
            <p className="introduction-body text-start">
              Knowledge Disseminater
            </p>
            <p className="introduction-body text-start">
              Photo & Music Hobbyist
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
