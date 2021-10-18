//contains all the logic to check whether the values we enter are correct or not. eg. will check the password
//values is what the user enters
export default function validateInfo(values) {
  let errors = {};

  //trim is used to get rid of the white spaces
  //if there is no value of username then it will show the foll msg
  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  //for email
  //if there is no value for email 1st condition is executed and if there is any error in email then 2nd is executed. eg. if there is no @ in email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email id is invalid";
  }

  //for password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password should contain more than 6 characters.";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Pasword do not match";
  }

  return errors;
}
