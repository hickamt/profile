/**
  Renders a Card with the top image background dark
  the bottom portion white. Requires a custom button image
  is passed.
  Dependency: Bootstrap 5
  Object Properties:
    cardsSrc: url for the upper card image
    cardAlt: alternative text for accessibility
    cardTitle: short title of card
    description: self describing, I hope
    buttonHref: url link for the custom button
    buttonSrc: the url/path for the button image
    buttonAlt: alternative text for accessibility
*/
const CardBody = ({
  cardSrc,
  cardAlt,
  cardTitle,
  description,
  buttonHref,
  buttonSrc,
  buttonAlt,
}) => {
  return (
    <div className="card-body col-md-4 col-sm-12">
      <div className="card bg-dark">
        <img src={cardSrc} alt={cardAlt} className="card-img-top" />
        <div className="body bg-white text-dark text-center">
          <h2 className="title fs-3 text-center">{cardTitle}</h2>
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
