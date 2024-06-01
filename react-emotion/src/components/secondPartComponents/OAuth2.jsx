import React, { useState, useRef, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import OAuth2Child from "./OAuth2Child";

const OAuth2 = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const iconFirstBoxRef = useRef(null);
  const iconSecondBoxRef = useRef(null);
  const iconThirdBoxRef = useRef(null);

  useEffect(() => {
    if (
      firstRef.current &&
      secondRef.current &&
      thirdRef.current &&
      iconFirstBoxRef.current &&
      iconSecondBoxRef.current &&
      iconThirdBoxRef.current
    ) {
      firstRef.current.style.height = "auto";
      secondRef.current.style.height = "1.5rem";
      thirdRef.current.style.height = "1.5rem";
      iconFirstBoxRef.current.style.transform = "rotate(90deg)";
      firstRef.current.onclick = () => {
        firstRef.current.style.height = "auto";
        secondRef.current.style.height = "1.5rem";
        thirdRef.current.style.height = "1.5rem";
        iconFirstBoxRef.current.style.transform = "rotate(90deg)";
        iconSecondBoxRef.current.style.transform = "rotate(0deg)";
        iconThirdBoxRef.current.style.transform = "rotate(0deg)";
      };
      secondRef.current.onclick = () => {
        firstRef.current.style.height = "1.5rem";
        secondRef.current.style.height = "auto";
        thirdRef.current.style.height = "1.5rem";
        iconFirstBoxRef.current.style.transform = "rotate(0deg)";
        iconSecondBoxRef.current.style.transform = "rotate(90deg)";
        iconThirdBoxRef.current.style.transform = "rotate(0deg)";
      };
      thirdRef.current.onclick = () => {
        firstRef.current.style.height = "1.5rem";
        secondRef.current.style.height = "1.5rem";
        thirdRef.current.style.height = "auto";
        iconFirstBoxRef.current.style.transform = "rotate(0deg)";
        iconSecondBoxRef.current.style.transform = "rotate(0deg)";
        iconThirdBoxRef.current.style.transform = "rotate(90deg)";
      };
    }
  }, []);

  const innerBoxStyle = css({
    border: "1px solid lightgrey",
    padding: "17px",
    borderRadius: "10px",
    width: "56%",
    transition: "height 1s",
    height: "1.5rem",
    overflow: "scroll",
  });
  const headingStyle = css({
    display: "flex",
    gap: "6px",
    cursor: "pointer",
  });

  return (
    <div
      css={css({
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
      })}
    >
      <div css={innerBoxStyle} ref={firstRef}>
        <div css={headingStyle}>
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconFirstBoxRef}
          >
            chevron_right
          </span>
          <div css={css({ padding: "2px" })}>Authentication URL</div>
        </div>
        <OAuth2Child firstHeading="Authorization endpoint URL*" />
      </div>
      <div css={innerBoxStyle} ref={secondRef}>
        <div css={headingStyle}>
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconSecondBoxRef}
          >
            chevron_right
          </span>
          <div css={css({ padding: "2px" })}>Access Token URL</div>
        </div>
        <OAuth2Child firstHeading="Access token endpoint URL*" />
      </div>
      <div css={innerBoxStyle} ref={thirdRef}>
        <div css={headingStyle}>
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconThirdBoxRef}
          >
            chevron_right
          </span>
          <div css={css({ padding: "2px" })}>Refresh Token request URL</div>
        </div>
        <div css={css({ marginTop: "2rem" })}>
          <input type="checkbox" id="agree" />
          <label for="agree">
            Automatically refresh token on an unauthorized error
          </label>
        </div>
        <OAuth2Child firstHeading="Refresh token endpoint URL*" />
      </div>
    </div>
  );
};

export default OAuth2;
