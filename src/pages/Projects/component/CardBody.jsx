import React from "react";

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
    <div className="col-md-4 col-sm-12">
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
