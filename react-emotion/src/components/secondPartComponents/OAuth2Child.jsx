import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import InputElement from "../../reusable/InputElement";
import RadioElement from "../../reusable/RadioElement";
import ParameterElement from "../../reusable/ParameterElement";
import KVPair from "../../reusable/KVPair";

const OAuth2Child = (props) => {
  const requestBodyRef = useRef(null);

  const removeAPIRequestBody = (value) => {
    if (requestBodyRef.current) {
      requestBodyRef.current.style.display = value ? "none" : "block";
    }
  };

  const OAuthChildContainer = styled.div`
    .gap {
      margin-top: 2rem;
    }
  `;
  const FourthComponentInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4px;

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
  const InputElementContainerFirst = styled.div`
    width: 90%;
  `;
  const InputElementContainerSecond = styled.div`
    width: 30%;
  `;
  return (
    <OAuthChildContainer>
      {/* first *** */}
      <div className="gap">
        <div>{props.firstHeading}</div>
        <InputElementContainerFirst>
          <InputElement
            value={"Enter Request URL in format https://samplurl.example.com/"}
          />
        </InputElementContainerFirst>
      </div>
      {/* second */}
      <div className="gap">
        <RadioElement
          heading="Method"
          first="GET"
          second="POST"
          third="PUT"
          fourth="PATCH"
          removeAPIBody={removeAPIRequestBody}
        />
      </div>
      {/* third */}
      <div className="gap">
        <div>URL Parameters</div>
        <div>
          <ParameterElement
            fixedValue={props.flag ? "refresh_token" : "client_id"}
            value="true"
            placeholder="Type @ to personalize"
            fixedValue2=""
            color="#A1B3D3"
          />
        </div>
        <div>
          <ParameterElement
            fixedValue={props.flag ? "grant_type" : "state"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
            fixedValue2=""
          />
        </div>
        {props.flag ? (
          <></>
        ) : (
          <>
            <div>
              <ParameterElement
                fixedValue={"redirect_uri"}
                value="true"
                placeholder="Type @ to personalize"
                color="#A1B3D3"
                fixedValue2=""
              />
            </div>
            <div>
              <ParameterElement
                fixedValue={"response_type"}
                value="true"
                placeholder="Type @ to personalize"
                color="#A1B3D3"
                fixedValue2=""
              />
            </div>
            <div>
              <ParameterElement
                fixedValue={"scope"}
                value="true"
                placeholder="Type @ to personalize"
                color="#A1B3D3"
                fixedValue2=""
              />
            </div>
          </>
        )}
        <KVPair />
      </div>
      {/* fourth */}
      <div className="gap">
        <div> Headers</div>
        <FourthComponentInner>
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
        </FourthComponentInner>
        <div>
          <KVPair />
        </div>
      </div>

      {/* fifth */}
      <div className="gap">
        <RadioElement
          heading="API Request body type*"
          first="form"
          second="JSON"
          third="Raw"
          fourth="Empty"
        />
      </div>
      {/* sixth */}
      <div className="gap" ref={requestBodyRef}>
        <div> API Request body</div>
        <InputElementContainerSecond>
          <InputElement value={"Enter Key"} />
        </InputElementContainerSecond>
      </div>
    </OAuthChildContainer>
  );
};

export default OAuth2Child;
