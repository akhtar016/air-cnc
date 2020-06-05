import React, { useState } from "react";
import "./HomePageBody.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  faCaretDown,
  faPlus,
  faMinus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import HotelCardView from "../HotelCardView/HotelCardView";

const HomePageBody = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [babies, setBabies] = useState(0);

  let handleChangeArrival = (dateArrival) => {
    setArrivalDate(dateArrival);
  };

  let handleChangeDeparture = (dateDeparture) => {
    setDepartureDate(dateDeparture);
  };

  let adultGuestIncre = () => {
    let increAdult = adult + 1;
    setAdult(increAdult);
  };

  let adultGuestDecre = () => {
    if (adult >= 1) {
      let decreAdult = adult - 1;
      setAdult(decreAdult);
    }
  };

  let childGuestIncre = () => {
    let increChild = child + 1;
    setChild(increChild);
  };

  let childGuestDecre = () => {
    if (child >= 1) {
      let decreChild = child - 1;
      setChild(decreChild);
    }
  };

  let babyGuestIncre = () => {
    let increBabies = babies + 1;
    setBabies(increBabies);
  };

  let babyGuestDecre = () => {
    if (babies >= 1) {
      let decreBabies = babies - 1;
      setBabies(decreBabies);
    }
  };

  const restaurantExperience = [
    {
      title: "Discover the city's party scene",
      imgCaption: "Nightlife-New York",
      rentPrice: "$35",
      ratings: 64,
      imgLink: "https://i.ibb.co/c1Kc9SR/1.jpg",
      key: 1,
    },
    {
      title: "Tour with an Enthusiastic Local!",
      imgCaption: "Entertainment-Vancouver",
      rentPrice: "$3",
      ratings: 3,
      imgLink: "https://i.ibb.co/vXht425/8.jpg",
      key: 2,
    },
    {
      title: "Retro PhotoShoot in New York",
      imgCaption: "Photo class - los angeles",
      rentPrice: "$49",
      ratings: 72,
      imgLink: "https://i.ibb.co/pW5T0jf/2.jpg",
      key: 3,
    },
  ];


  const restaurantHome = [
    {
      title: "Unique Cob Cottage",
      imgCaption: "Nightlife-New York",
      rentPrice: "$128",
      ratings: 284,
      imgLink: "https://i.ibb.co/xmBm2LK/44.jpg",
      key: 1,
    },
    {
      title: "The Joshua Tree House",
      imgCaption: "Nightlife-New York",
      rentPrice: "$250",
      ratings: 269,
      imgLink: "https://i.ibb.co/tzBKjSV/55.jpg",
      key: 2,
    },
    {
      title: "A Pirate's Life For Me",
      imgCaption: "Nightlife-New York",
      rentPrice: "$209",
      ratings: 140,
      imgLink: "https://i.ibb.co/6nGvttP/66.jpg",
      key: 3,
    }
    
  ];

  return (
    <div className="container">
      <div className="mb-4">
        <h5 className="mt-5 font-weight-bold">Where do you want to go</h5>
      </div>
      <div className="row">
        <div className="col-4">
          <div className=" col-12 shadow-sm p-3 mb-3 bg-white rounded">
            <h6 className="text-uppercase font-weight-bold pl-2">Location</h6>
            <input
              type="text"
              className="form-control border-0 rounded-0"
              placeholder="Add City, Landmark or Address"
            />
          </div>

          <div className="row d-flex justify-content-around mb-3">
            <div className="col-5 shadow-sm p-3 bg-white rounded">
              <h6 className="font-weight-bold text-secondary pl-2">Arrival</h6>
              <DatePicker
                selected={arrivalDate}
                onChange={handleChangeArrival}
              />
            </div>
            <div className="col-5 shadow-sm p-3 bg-white rounded">
              <h6 className="font-weight-bold text-secondary pl-2">
                Departure
              </h6>
              <DatePicker
                selected={departureDate}
                onChange={handleChangeDeparture}
              />
            </div>
          </div>

          <div>
            <div className="row d-flex justify-content-around mb-3 shadow-sm p-4 mr-1 ml-1 bg-white rounded">
              <div className="custom-design">
                <h6 className="text-secondary">Guests</h6>
                <h6 className="text-uppercase font-weight-bold">
                  {adult} Adults, {child} Children, {babies} Babies
                </h6>
              </div>
              <div>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="shadow-sm p-4 mb-3 bg-white rounded">
              <div className="row mb-5">
                <div className="col-7">
                  <h6 className="text-uppercase font-weight-bold left-0">
                    Adults
                  </h6>
                </div>
                <div className="col-5 row d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faMinus} onClick={adultGuestDecre} />
                  </div>
                  <div>
                    <h4>{adult}</h4>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPlus} onClick={adultGuestIncre} />
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-7">
                  <h6 className="text-uppercase font-weight-bold">Child</h6>
                  <h6 className="text-secondary">Age 2-12</h6>
                </div>
                <div className="col-5 row d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faMinus} onClick={childGuestDecre} />
                  </div>
                  <div>
                    <h4>{child}</h4>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPlus} onClick={childGuestIncre} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <h6 className="text-uppercase font-weight-bold">Babies</h6>
                  <h6 className="text-secondary">Younger than 2</h6>
                </div>
                <div className="col-5 row d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faMinus} onClick={babyGuestDecre} />
                  </div>
                  <div>
                    <h4>{babies}</h4>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPlus} onClick={babyGuestIncre} />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-success mt-3 mb-4"
                >
                  Apply
                </button>
              </div>
              <div>
                <button className="btn btn-lg btn-block bg-success text-light">
                  <FontAwesomeIcon icon={faSearch} /> Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex justify-content-md-between mb-2">
            <h4>Experiences</h4>
            <a href="/">See all</a>
          </div>
          <div className="row mb-4">
            {restaurantExperience.map((hotelInfo) => (
              <div className="col-md-4 d-flex justify-content-md-between">
                <HotelCardView
                  hotelInfo={hotelInfo}
                  key={hotelInfo.key}
                ></HotelCardView>
              </div>
            ))}
          </div>


          <div className="d-flex justify-content-md-between mb-2">
            <h4>Homes</h4>
            <a href="/">See all</a>
          </div>
          <div className="row">
            {restaurantHome.map((hotelInfo) => (
              <div className="col-md-4 d-flex justify-content-md-between">
                <HotelCardView
                  hotelInfo={hotelInfo}
                  key={hotelInfo.key}
                ></HotelCardView>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
