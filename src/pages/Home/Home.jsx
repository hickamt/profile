import styled from "styled-components";
import thickam from "./thickam.jpg";
import githubIMG from "./github.png";

const ProfileStyle = styled.div`
  margin-top: 2em;

  .card {
    border-radius: 1em;
    opacity: 95%;
  }

  .card-body {
    min-height: 350px;
  }

  img.card-img-top {
    margin: 2em 1em;
    max-height: 346px;
    max-width: 14em;
    align-self: center;
    border-radius: 1em;
  }

  .custom-button {
    width: auto;
    height: 3em;
    margin-top: 1em
  }

  @media (max-width: 660px) {
    margin-top: 0;
    .card {
      border-radius: 0;
    }
  }
`;

const Home = () => {
  return (
    <>
      <ProfileStyle>
        <h1 hidden>Todd Hickam Home Page</h1>
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card bg-dark">
              <img src={thickam} alt="" className="card-img-top" />
              <div className="card-body bg-dark text-light">
                <h2 className="card-title fs-3">Todd Hickam</h2>
                <p className="introduction-body">
                  Portland, Oregon Resident
                </p>
                <p className="introduction-body ">
                  Computer Science Undergrad
                </p>
                <p className="introduction-body ">
                  Web Dev Passionate
                </p>
                <p className="introduction-body ">
                  Knowledge Disseminater
                </p>
                <p className="introduction-body ">
                  Photo & Music Hobbyist
                </p>
                <a
                  href="https://github.com/hickamt"
                  target="_blank"
                  className="profile">
                  <img
                    className="custom-button"
                    src={githubIMG}
                    alt="image of github button"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ProfileStyle>
    </>
  );
};

export default Home;
