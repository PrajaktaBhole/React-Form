/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// Custom Hooks
import { useState, useEffect } from "react";
//import validateInfo from "./validateInfo";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //handleChange updates every time the user makes any changes in the input
  //e.target.name is targetting the name of every input
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //this prevents the form to refresh after clicking on submit button

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  //console.log(values);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
