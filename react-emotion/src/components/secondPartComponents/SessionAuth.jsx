import React, { useRef } from "react";
import InputElement from "../../reusable/InputElement";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import RadioElement from "../../reusable/RadioElement";
import KVPair from "../../reusable/KVPair";

const SessionAuth = () => {
  const requestBodyRef = useRef(null);
  const removeAPIRequestBody = (value) => {
    console.log(value);
    if (requestBodyRef.current) {
      requestBodyRef.current.style.display = value ? "none" : "block";
    }
  };
  const SessionAuthContainer = styled.div`
    .child-first-container {
      display: flex;
      flex-wrap: wrap;
      width: 79%;
      gap: 5rem;
    }
    .child-container-gap {
      margin-top: 2rem;
    }
    .child-container-parameter {
      margin-top: 2rem;
      width: 60%;
    }
    .child-first-container-part {
      width: 34%;
    }
    .child-second-container-inputElement-container {
      width: 58%;
    }
    .child-seventh-container-inputElement-container {
      width: 30%;
    }
    .parameter-element-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .delete-icon {
      font-size: 30px;
      padding-top: 9px;
      cursor: pointer;
      color: #a1b3d3;
    }
    .key-inputElement-container {
      width: 50%;
    }
    .value-inputElement-container {
      width: 33%;
    }
  `;
  return (
    <SessionAuthContainer>
      {/*First container - username and password */}
      <div className="child-first-container">
        <div className="child-first-container-part">
          <div>Username*</div>
          <div>
            <InputElement value="Enter user name" />
          </div>
        </div>
        <div className="child-first-container-part">
          <div>Password*</div>
          <div>
            <InputElement value="Enter password" />
          </div>
        </div>
      </div>
      {/*Second container -  Token Exchange */}
      <div className="child-container-gap">
        <div>Token exchange endpoint URL*</div>
        <div className="child-second-container-inputElement-container">
          <InputElement value="Enter request URL in the format https://samplurl.example.com" />
        </div>
      </div>
      {/*Third container  - Method */}
      <div className="child-container-gap">
        <RadioElement
          heading="Method"
          first="GET"
          second="POST"
          third="PUT"
          fourth="PATCH"
          removeAPIBody={removeAPIRequestBody}
        />
      </div>
      {/*Fourth container -  URL Parameter */}
      <div className="child-container-parameter">
        <div> URL Parameters</div>
        <div className="parameter-element-container">
          <div className="key-inputElement-container">
            <InputElement value={"Enter Key"} />
          </div>
          <div className="value-inputElement-container">
            <InputElement value={"Enter value"} />
          </div>
          <div>
            <span className="delete-icon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
        <div>
          <KVPair />
        </div>
      </div>
      {/*Fifth container -  Headers */}
      <div className="child-container-parameter">
        <div> Headers</div>
        <div className="parameter-element-container">
          <div className="key-inputElement-container">
            <InputElement value={"Enter Key"} />
          </div>
          <div className="value-inputElement-container">
            <InputElement value={"Enter value"} />
          </div>
          <div>
            <span className="delete-icon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
        <div>
          <KVPair />
        </div>
      </div>
      {/* Sixth container API request body type */}
      <div className="child-container-gap">
        <RadioElement
          heading="API Request body type*"
          first="form"
          second="JSON"
          third="Raw"
          fourth="Empty"
        />
      </div>
      {/* Seventh container Request body */}
      <div className="child-container-gap" ref={requestBodyRef}>
        <div> API Request body</div>
        <div className="child-seventh-container-inputElement-container">
          <InputElement value={"Enter Key"} />
        </div>
      </div>
    </SessionAuthContainer>
  );
};

export default SessionAuth;
