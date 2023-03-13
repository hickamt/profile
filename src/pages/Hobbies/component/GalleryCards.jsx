/**
  Renders a Card component with the top image background dark
  the bottom portion white. Requires a custom button image
  is passed.
  Dependency: Bootstrap 5
  Component Properties:
    cardImgSrc: url for the upper card image
    cardImgAlt: alternative text for accessibility
    cardBodyTitle: short title of card
    description: self describing, I hope
    buttonHref: url link for the custom button
    buttonSrc: the url/path for the button image
    buttonAlt: alternative text for accessibility
*/

export const GalleryButton = ({ slideNum, active, ariaLabel }) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={slideNum}
      class={active}
      aria-current="true"
      aria-label={ariaLabel}></button>
  );
};

export const GallerySlides = ({ imgSrc, imgAlt, title, pComment }) => {
  return (
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={imgSrc} class="d-block w-100" alt={imgAlt} />
      <div class="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{pComment}</p>
      </div>
    </div>
  );
};
