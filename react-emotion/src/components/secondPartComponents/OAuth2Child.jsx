import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputElement from "../../reusable/InputElement";
import RadioElement from "../../reusable/RadioElement";
import ParameterElement from "../../reusable/ParameterElement";
import KVPair from "../../reusable/KVPair";

const OAuth2Child = (props) => {
  const requestBodyRef = useRef(null);
  const gap = css({
    marginTop: "2rem",
  });
  const removeAPIRequestBody = (value) => {
    console.log(value);
    if (requestBodyRef.current) {
      requestBodyRef.current.style.display = value ? "none" : "block";
    }
  };
  return (
    <div>
      {/* first *** */}
      <div css={gap}>
        <div>{props.firstHeading}</div>
        <div css={css({ width: "90%" })}>
          <InputElement
            value={"Enter Request URL in format https://samplurl.example.com/"}
          />
        </div>
      </div>
      {/* second */}
      <div css={gap}>
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
      <div css={gap}>
        <div>URL Parameters</div>
        <div css={css({ marginTop: "1rem" })}>
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
      <div css={gap}>
        <div> Headers</div>
        <div
          css={css({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "4px",
          })}
        >
          <div css={css({ width: "50%" })}>
            <InputElement value={"Enter Key"} />
          </div>
          <div css={css({ width: "33%" })}>
            <InputElement value={"Enter value"} />
          </div>
          <div>
            <span
              style={{
                fontSize: "30px",
                paddingTop: "9px",
                cursor: "pointer",
                color: "#A1B3D3",
              }}
              class="material-symbols-outlined"
            >
              delete
            </span>
          </div>
        </div>
        <div>
          <KVPair />
        </div>
      </div>

      {/* fifth */}
      <div css={gap}>
        <RadioElement
          heading="API Request body type*"
          first="form"
          second="JSON"
          third="Raw"
          fourth="Empty"
        />
      </div>
      {/* sixth */}
      <div css={gap} ref={requestBodyRef}>
        <div> API Request body</div>
        <div css={css({ width: "30%" })}>
          <InputElement value={"Enter Key"} />
        </div>
      </div>
    </div>
  );
};

export default OAuth2Child;
