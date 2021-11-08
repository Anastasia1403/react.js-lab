import React, { useState } from "react";
import DisplayPasswordToggler from "./DisplayPasswordToggler/DisplayPasswordToggler.jsx";
import { inputSettings } from "./InputSettings.js";
import {
  ErrorMessage,
  Icon,
  StyledInput,
  StyledInputWrapper,
} from "./InputStyle";


function Input(props) {
  const [passwordDisplay, setPasswordDisplay] = useState("false");

  const togglerPassword = () => {
    setPasswordDisplay(!passwordDisplay);
  };

  let svg = inputSettings[props.name].img
  let placeholder = inputSettings[props.name].placeholder;

  let type = "text";
  if (props.name === "password" || props.name === "confirmPassword") {
    type = passwordDisplay ? "password" : "text";
  }
  if (props.name === "email") type = "email";

  return (
    <StyledInputWrapper>
      <Icon src={svg} alt={props.name} />

      <StyledInput
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
        type={type}
        name={props.name}
        placeholder={placeholder}
        error={props.error}
        touched={props.touched}
      />

      {props.name === "password" || props.name === "confirmPassword" ? (
        <DisplayPasswordToggler
          togglerPassword={togglerPassword}
          passwordDisplay={passwordDisplay}
        />
      ) : null}
      {props.touched && props.error ? (
        <ErrorMessage>{props.error}</ErrorMessage>
      ) : null}
    </StyledInputWrapper>
  );
}

export default Input;
