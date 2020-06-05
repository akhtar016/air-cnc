import React, { useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import ReactIntlTelInput from "react-intl-tel-input-v2";
import firebase from "./firebase";

const Login = () => {
  const [value, setValue] = useState({ iso2: "bd", dialCode: "+88" });

  const inputProps = {
    placeholder: "Enter Your Number",
  };

  const intlTelOpts = {
    preferredCountries: ["bd"],
  };

  const onChange = (value) => setValue(value);
  console.log(value);
  console.log(value.dialCode + value.phone);

  let validPhoneNumber = value.dialCode + value.phone;

  const handleClick = () => {
    console.log("button is clicked");
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });
    //let number = "+8801781656023";
    firebase
      .auth()
      .signInWithPhoneNumber(validPhoneNumber, recaptcha)
      .then(function (e) {
        let code = prompt("Enter the OTP", "");
        if (code == null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              "Number " +result.user.phoneNumber + " is Verified";
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <ReactIntlTelInput
        className="mt-5 mb-3"
        inputProps={inputProps}
        intlTelOpts={intlTelOpts}
        value={value}
        onChange={onChange}
      />
      <div id="recaptcha-container"></div>

      
      <div>
        <button className="btn btn-success" onClick={handleClick}>Send</button>
      </div>
      <div className="mt-2 text-success"><label htmlFor=""></label></div>
    </div>
  );
};

export default Login;
