import { display } from "@mui/system";
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
        width: "64%",
      })}
    >
      <div>
        <div
          css={css({
            width: "24rem",
          })}
        >
          User Name*
        </div>
        <InputElement value={"Enter user name"} />
      </div>
      <div>
        <div
          css={css({
            width: "24rem",
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
