import styled from "styled-components";
import thickam from "./thickam.jpg";
import githubIMG from "./github.png";

const ProfileStyle = styled.div`
  margin-top: 2em;

  .card {
    border-radius: 1em;
    opacity: 95%;
    min-width: 350px;
    margin: 1em 2em;
  }

  .card-body {
    min-height: 220px;
    // min-width: px;
  }

  img.card-img-top {
    max-height: 346px;
    width: 18em;
    align-self: center;
    border-radius: 1em;
  }

  .custom-button {
    width: auto;
    height: 3em;
  }

  @media (max-width: 748px) {
    margin-top: 0;
    .card {
      border-radius: 0;
      margin: 0;
    }
    .card-body {
      min-height: 200px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <ProfileStyle>
        <h1 hidden>Todd Hickam Home Page</h1>
        <div className="row justify-content-center text-center">
          <div className="col-sm-4">
            <div className="card bg-dark">
              <img src={thickam} alt="" className="card-img-top mt-4" />
              <div className="card-body bg-dark text-light text-center">
                <h2 className="card-title fs-3 text-center">Todd Hickam</h2>
                <p className="introduction-body text-center">
                  Portland, Oregon Resident
                </p>
                <p className="introduction-body text-center">
                  Computer Science Undergrad
                </p>
                <p className="introduction-body text-center">
                  Web Dev Passionate
                </p>
                <p className="introduction-body text-center">
                  Knowledge Disseminater
                </p>
                <p className="introduction-body text-center">
                  Photo & Music Hobbyist
                </p>
                <a
                  href="https://github.com/hickamt"
                  target="_blank"
                  className="project1">
                  <img
                    className="custom-button"
                    src={githubIMG}
                    alt="image of stack blitz button"
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
