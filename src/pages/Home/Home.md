```js
import thickam from "./thickam.jpg";
import { useState } from "react";
import styled from "styled-components";

const MediaQueryBasedWrapper = styled.div`
  background-color: pink;
  @media (max-width: 768px) {
    background-color: red;
  }
  @media (max-width: 520px) {
    background-color: blue;
  }
`;

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container-md rounded-2 profile-body mt-4">
        <div className="row mx-auto py-4">
          <div className="col-lg-4 col-sm-12 profile-image">
            <img
              className="profile-image rounded-2"
              // src="../../public/img/profile/Todd_Hickam_Mercury.jpg"
              src={thickam}
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
            <MediaQueryBasedWrapper>
              i'm a toggle holster
              <button onClick={() => setOpen(!isOpen)}> click to toggle</button>
              {isOpen && <div>sup</div>}
            </MediaQueryBasedWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
```