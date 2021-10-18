import React, { useState } from "react";
import SignUp from "./SignUp";
import Success from "./Success";
import "./Form.css";
import form from "./images/form.png";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <h2 className="form-text">Registration Form</h2>
          <img src={form} alt=""></img>
        </div>
        {/* className="form-img" */}

        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <Success />}
      </div>
    </>
  );
};

export default Form;
