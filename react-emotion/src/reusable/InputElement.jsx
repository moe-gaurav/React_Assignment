import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
const InputElement = (props) => {
  const handleChange = (e) => {
    if (props.flag) {
      if (props.flag == 1) {
        props.handleChangeFirst(props.id, e.target.value);
      } else {
        props.handleChangeSecond(props.id, e.target.value);
      }
    } else {
      return;
    }
  };

  const InputElement = styled.input`
    height: 2rem;
    width: 100%;
    margin-top: 6px;
    font-size: medium;
  `;
  return (
    <>
      {props.value || props.placeholder ? (
        <InputElement
          placeholder={props.value || props.placeholder}
          type="text"
          onChange={handleChange}
        />
      ) : (
        <InputElement
          type="text"
          value={props.fixedValue}
          placeholder={props.value || props.placeholder}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default InputElement;
