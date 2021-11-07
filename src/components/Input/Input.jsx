import React, { useState } from "react";
import lock from "./img/lock.svg";
import user from "./img/user.svg";
import email from "./img/user.svg";
import check from "./img/check.svg";
import DisplayPasswordToggler from "./DisplayPasswordToggler/DisplayPasswordToggler.jsx";
import { ErrorMessage, Icon, StyledInput, StyledInputWrapper } from "./InputStyle";



function Input(props) {
  const [passwordDisplay, setPasswordDisplay] = useState("false");

  const togglerPassword = (event) => {
    setPasswordDisplay(!passwordDisplay);
  };

  let svg;
  if (props.name === "email") svg = email;
  if (props.name === "firstName" || props.name === "lastName") svg = user;
  if (props.name === "password") svg = lock;
  if (props.name === "confirmPassword") svg = check;

  let type = "text";
  if (props.name === "password" || props.name === "confirmPassword") {
    type = passwordDisplay ? "password" : "text";
  } 
  if (props.name === "email") type="email"
  
  

  return (
    <StyledInputWrapper className="form__input-wrapper">
      <Icon src={svg} alt={props.name}/>
     
      <StyledInput
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
        type={type}
        name={props.name}
        placeholder={props.name}
        error={props.error}
        touched={props.touched}
      />

      {props.name === "password" || props.name === "confirmPassword" ? (
        <DisplayPasswordToggler
          togglerPassword={togglerPassword}
          passwordDisplay={passwordDisplay}
        />
      ) : null}
      {props.touched && props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </StyledInputWrapper>
  );
}

export default Input;
