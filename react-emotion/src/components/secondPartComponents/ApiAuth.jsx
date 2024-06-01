import React from "react";
import InputElement from "../../reusable/InputElement";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const ApiAuth = () => {
  return (
    <div id="api_key_container">
      <div id="api_key_container_title">API Key*</div>
      <div
        css={css({
          width: "24rem",
        })}
        id="api_key_container_inputElement"
      >
        <InputElement value={"Enter API Key"} />
      </div>
    </div>
  );
};

export default ApiAuth;
