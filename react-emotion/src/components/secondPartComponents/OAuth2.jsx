import React, { useRef, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
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

  const OuterBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .innerBox-style {
      border: 1px solid lightgrey;
      padding: 17px;
      border-radius: 10px;
      width: 56%;
      transition: height 1s;
      height: 1.5rem;
      overflow: scroll;
    }
    .heading-style {
      display: flex;
      cursor: pointer;
      gap: 6px;
    }
    .heading-style-title {
      padding: 2px;
    }
    .innerBox-style-checkBox {
      margin-top: 2rem;
    }
  `;

  return (
    <OuterBox>
      {/* First inner box */}
      <div className="innerBox-style" ref={firstRef}>
        <div className="heading-style">
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconFirstBoxRef}
          >
            chevron_right
          </span>
          <div className="heading-style-title">Authentication URL</div>
        </div>
        <OAuth2Child firstHeading="Authorization endpoint URL*" />
      </div>
      {/* Second inner box */}
      <div className="innerBox-style" ref={secondRef}>
        <div className="heading-style">
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconSecondBoxRef}
          >
            chevron_right
          </span>
          <div className="heading-style-title">Access Token URL</div>
        </div>
        <OAuth2Child firstHeading="Access token endpoint URL*" />
      </div>
      {/* Third inner box */}
      <div className="innerBox-style" ref={thirdRef}>
        <div className="heading-style">
          <span
            style={{ transition: "transform 0.5s" }}
            class="material-symbols-outlined"
            ref={iconThirdBoxRef}
          >
            chevron_right
          </span>
          <div className="heading-style-title">Refresh Token request URL</div>
        </div>
        <div className="innerBox-style-checkBox">
          <input type="checkbox" id="agree" />
          <label for="agree">
            Automatically refresh token on an unauthorized error
          </label>
        </div>
        <OAuth2Child firstHeading="Refresh token endpoint URL*" flag="true" />
      </div>
    </OuterBox>
  );
};

export default OAuth2;
