import React, { useState } from "react";
import 'intl-tel-input/build/css/intlTelInput.css';
import ReactIntlTelInput from 'react-intl-tel-input-v2';

const Login = () => {

    const [value, setValue] = useState({ iso2: 'bd', dialCode: '880' })

  const inputProps = {
    placeholder: 'Enter Your Number',
  };
 
  const intlTelOpts = {
    preferredCountries: ['bd'],
  };

 const onChange = value => setValue(value);
 
  return (
    <div className="d-flex justify-content-center align-items-center full-width full-height">
      

<ReactIntlTelInput
      inputProps={inputProps}
      intlTelOpts={intlTelOpts}
      value={value}
      onChange={onChange}
      />
    </div>
  );
};

export default Login;
