import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputElement from "./InputElement";

const ParameterElement = (props) => {
  const handleChangeFirst = (id, val) => {
    props.changeFirstValue(id, val);
  };

  const handleChangeSecond = (id, val) => {
    props.changeSecondValue(id, val);
  };
  return (
    <div
      css={css({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "4px",
      })}
    >
      <div css={css({ width: "50%" })}>
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
      <div css={css({ width: "33%" })}>
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
        <span
          style={{
            fontSize: "32px",
            paddingTop: "8px",
            cursor: props.color ? "not-allowed" : "pointer",
            color: props.color ? `${props.color}` : "black",
            fontWeight: 300,
          }}
          class="material-symbols-outlined"
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default ParameterElement;
