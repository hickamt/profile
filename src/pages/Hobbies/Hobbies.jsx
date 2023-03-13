import styled from "styled-components";
import { GalleryButton, GallerySlides } from "./component/GalleryCards";
import { galleries } from "./data/GalleryData";
import germany_1 from "./data/gallery_img/germany/germany_1.jpg";
import germany_2 from "./data/gallery_img/germany/germany_2.jpg";
import germany_3 from "./data/gallery_img/germany/germany_3.jpg";
// import italy_3 from "./data/gallery_img/italy/italy_4.jpg";
// import tbird_1 from "./data/gallery_img/thunderbird/tbird1.jpg";

const GalleryStyle = styled.div`
  .carousel-inner {
  }
  @media (max-width: 748px) {
  }
`;

const Hobbies = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel">
        <div class="carousel-indicators"></div>

        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={germany_1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src={germany_2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={germany_3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

// const Hobbies = () => {
//   return (
//     <>
//       <GalleryStyle>
//         <h1 className="text-center mt-3" hidden>
//           Image Gallery
//         </h1>
//         <div className="container">
//           <div className="row mx-auto">
//             {galleries.map((gallery, index) => {
//               return <GalleryCard key={index} {...gallery} />;
//             })}
//           </div>
//         </div>
//       </GalleryStyle>
//     </>
//   );
// };

export default Hobbies;
