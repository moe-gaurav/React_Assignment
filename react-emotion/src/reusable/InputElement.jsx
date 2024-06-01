import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
  return (
    <>
      {props.value || props.placeholder ? (
        <input
          placeholder={props.value || props.placeholder}
          type="text"
          css={css({
            height: "2rem",
            width: "100%",
            marginTop: "6px",
            fontSize: "medium",
          })}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          value={props.fixedValue}
          // value="fff"
          placeholder={props.value || props.placeholder}
          css={css({
            height: "2rem",
            width: "100%",
            marginTop: "6px",
            fontSize: "medium",
          })}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default InputElement;
