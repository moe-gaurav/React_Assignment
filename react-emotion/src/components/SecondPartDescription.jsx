import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ApiAuth from "./secondPartComponents/ApiAuth";
import BasicAuth from "./secondPartComponents/BasicAuth";
import OAuth2 from "./secondPartComponents/OAuth2";
import SessionAuth from "./secondPartComponents/SessionAuth";
const SecondPartDescription = ({ value }) => {

    const style=css({
        marginTop:"1rem",
        fontFamily:"sans-serif"
    })
  switch (value) {
    case "No Auth":
      return <div></div>;
    case "Api Auth":
      return <div css={style}><ApiAuth/></div>;
    case "Basic Auth":
      return <div css={style}><BasicAuth/></div>;
    case "OAuth2":
      return <div css={style}><OAuth2/></div>;
    case "Session Auth":
      return <div css={style}><SessionAuth/></div>;
  }
};

export default SecondPartDescription;
