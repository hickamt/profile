import React from "react";

const CardBody = ({ cardSrc, title, description, buttonSrc }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="bg-dark">
        <img src={cardSrc} alt="" className="card-img-top" />
        <div className="body bg-white text-dark text-center">
          <h2 className="title fs-3 text-center">{title}</h2>
          <p className="text">{description}</p>
          <a
            href="https://stackblitz.com/github/hickamt/HTTP_Only_App_Template"
            target="_blank"
            className="">
            <img
              className="custom-button"
              src={buttonSrc}
              alt="image of stackblitz button"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardBody;
