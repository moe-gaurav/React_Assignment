import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import InputElement from "./InputElement";

const ParameterElement = (props) => {
  const handleChangeFirst = (id, val) => {
    props.changeFirstValue(id, val);
  };

  const handleChangeSecond = (id, val) => {
    props.changeSecondValue(id, val);
  };

  const ParameterElementContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4px;
    .delete-icon {
      font-size: 32px;
      padding-top: 8px;
      cursor: ${props.color ? "not-allowed" : "pointer"};
      color: ${props.color ? `${props.color}` : "black"};
      font-weight: 300;
    }
    .first-inputElement {
      width: 50%;
    }
    .second-inputElement {
      width: 33%;
    }
  `;

  return (
    <ParameterElementContainer color={props.color}>
      <div className="first-inputElement">
        {props.fixedValue === "" ? (
          <InputElement
            handleChangeFirst={handleChangeFirst}
            flag={1}
            value="Enter Key"
            id={props.id}
          />
        ) : (
          <InputElement
            handleChangeFirst={handleChangeFirst}
            flag={1}
            fixedValue={props.fixedValue}
            id={props.id}
          />
        )}
      </div>
      <div className="second-inputElement">
        {props.fixedValue2 === "" ? (
          <InputElement
            handleChangeSecond={handleChangeSecond}
            flag={2}
            value={props.placeholder ? props.placeholder : "Enter Value"}
            id={props.id}
          />
        ) : (
          <InputElement
            handleChangeSecond={handleChangeSecond}
            flag={2}
            fixedValue={props.fixedValue2}
            id={props.id}
          />
        )}
      </div>
      <div
        onClick={() => {
          props.delete(props.id);
        }}
      >
        <span className=" delete-icon material-symbols-outlined">delete</span>
      </div>
    </ParameterElementContainer>
  );
};

export default ParameterElement;
