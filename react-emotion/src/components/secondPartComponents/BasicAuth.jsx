import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputElement from "../../reusable/InputElement";

const BasicAuth = () => {
  return (
    <div
      css={css({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "68%",
        gap: "12px",
      })}
    >
      <div css={css({ width: "42%", minWidth: "20rem" })}>
        <div
          css={css({
            width: "100%",
          })}
        >
          User Name*
        </div>
        <InputElement value={"Enter user name"} />
      </div>
      <div css={css({ width: "42%", minWidth: "20rem" })}>
        <div
          css={css({
            width: "100%",
          })}
        >
          Password*
        </div>
        <InputElement value={"Enter password"} />
      </div>
    </div>
  );
};

export default BasicAuth;
