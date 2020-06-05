import React, { useState } from "react";
import "./HomePageBody.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  faCaretUp,
  faCaretDown,
  faPlus,
  faMinus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const HomePageBody = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [babies, setBabies] = useState(0);

  let handleChangeArrival = (date) => {
    setArrivalDate(date);
  };

  let handleChangeDeparture = (date) => {
    setDepartureDate(date);
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

  return (
    <div className="container">
      <div className="mb-4">
        <h5 className="mt-5 font-weight-bold">Where do you want to go</h5>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="shadow-sm p-4 mb-5 bg-white rounded">
            <h6 className="text-uppercase font-weight-bold pl-2">Location</h6>
            <input
              type="text"
              className="form-control border-top-0 border-right-0 border-left-0 rounded-0"
              placeholder="Add City, Landmark or Address"
            />
          </div>

          <div className="col-8 shadow-sm p-3 mb-2 bg-white rounded">
            <h6 className="font-weight-bold text-secondary pl-2">Arrival</h6>
            <DatePicker selected={arrivalDate} onChange={handleChangeArrival} />
          </div>
          <div className="col-8 shadow-sm p-3 mb-5 bg-white rounded">
            <h6 className="font-weight-bold text-secondary pl-2">Departure</h6>
            <DatePicker
              selected={departureDate}
              onChange={handleChangeDeparture}
            />
          </div>

          <div>
            <div className="row d-flex justify-content-between mb-1 shadow-sm p-4 bg-white rounded">
              <div>
                <h6 className="text-secondary">Guests</h6>
                <h6 className="text-uppercase font-weight-bold">
                  2 Adults, 1 Child
                </h6>
              </div>
              <div>
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="shadow-sm p-3 mb-3 bg-white rounded">
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
                <button type="button" class="btn btn-outline-success mt-3 mb-4">
                  Apply
                </button>
              </div>
              <div>
                <button className="btn btn-success btn-lg btn-block"><FontAwesomeIcon icon={faSearch}/> Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8">
          <h2>Hi there this is column eight</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
