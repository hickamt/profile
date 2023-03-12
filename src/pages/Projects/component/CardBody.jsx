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
const CardBody = ({
  cardImgSrc,
  cardImgAlt,
  cardBodyTitle,
  description,
  buttonHref,
  buttonSrc,
  buttonAlt,
}) => {
  return (
    <div className="card-body col-md-4 col-sm-12">
      <div className="card bg-dark">
        <img src={cardImgSrc} alt={cardImgAlt} className="card-img-top" />
        <div className="body bg-white text-dark text-center pt-3">
          <h2 className="title fs-3">{cardBodyTitle}</h2>
          <p className="text">{description}</p>
          <a href={buttonHref} target="_blank" className="">
            <img className="custom-button" src={buttonSrc} alt={buttonAlt} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardBody;
