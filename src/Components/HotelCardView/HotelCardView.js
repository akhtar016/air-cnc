import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const HotelCardView = (props) => {
  const { title, imgLink, imgCaption, rentPrice, ratings } = props.hotelInfo;

  return (
    <div className="card border-0">
      <img className="card-img-top" src={imgLink} alt="" />
      <div className="p-1"><small className="pt-1 font-weight-bold text-uppercase">
      {imgCaption}
      </small>
      <h5>{title}</h5>
      <p>{rentPrice} per person</p>
      <div className="row">
      <div className="ml-3 custom-icon">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalf} />
      </div>
      
      <div>
      <p>{ratings}</p>
      </div>
      </div></div>
    </div>
  );
};

export default HotelCardView;
