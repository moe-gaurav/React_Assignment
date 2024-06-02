import React, { useRef } from "react";
import InputElement from "../../reusable/InputElement";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RadioElement from "../../reusable/RadioElement";
import KVPair from "../../reusable/KVPair";

const SessionAuth = () => {
  const requestBodyRef = useRef(null);
  const gap = css({
    marginTop: "2rem",
  });
  const innerBoxStyle = css({
    height: "auto",
    overflow: "scroll",
  });
  const removeAPIRequestBody = (value) => {
    console.log(value);
    if (requestBodyRef.current) {
      requestBodyRef.current.style.display = value ? "none" : "block";
    }
  };
  return (
    <div css={innerBoxStyle}>
      {/* username and password */}
      <div
        css={css({
          display: "flex",
          flexWrap: "wrap",
          width: "79%",
          gap: "5rem",
        })}
      >
        <div css={css({ width: "34%" })}>
          <div>Username*</div>
          <div css={css({ width: "100%" })}>
            <InputElement value="Enter user name" />
          </div>
        </div>
        <div css={css({ width: "34%" })}>
          <div>Password*</div>
          <div css={css({ width: "100%" })}>
            <InputElement value="Enter password" />
          </div>
        </div>
      </div>
      {/* Token Exchange */}
      <div css={gap}>
        <div>Token exchange endpoint URL*</div>
        <div css={css({ width: "58%" })}>
          <InputElement value="Enter request URL in the format https://samplurl.example.com" />
        </div>
      </div>
      {/* Method */}
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
      {/* URL Parameter */}
      <div css={[gap, css({ width: "60%" })]}>
        <div> URL Parameters</div>
        <div
          css={css({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
      {/* Headers */}
      <div css={[gap, css({ width: "60%" })]}>
        <div> Headers</div>
        <div
          css={css({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
      {/* API request body type */}
      <div css={gap}>
        <RadioElement
          heading="API Request body type*"
          first="form"
          second="JSON"
          third="Raw"
          fourth="Empty"
        />
      </div>
      {/* Request body */}
      <div css={gap} ref={requestBodyRef}>
        <div> API Request body</div>
        <div css={css({ width: "30%" })}>
          <InputElement value={"Enter Key"} />
        </div>
      </div>
    </div>
  );
};

export default SessionAuth;
