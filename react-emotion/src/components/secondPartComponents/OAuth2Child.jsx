import React, { useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";
import InputElement from "../../reusable/InputElement";
import RadioElement from "../../reusable/RadioElement";
import ParameterElement from "../../reusable/ParameterElement";

const OAuth2Child = ({ firstHeading }) => {
  const requestBodyRef = useRef(null);
  const [parameterBoxes, addParameterBox] = useState([]);
  const [updatedBox, setUpdatedBox] = useState([]);
  //   const []

  const handleChangeFirstValue = (id, value) => {
    const updatedBoxes = parameterBoxes.map((box) => {
      if (box.id === id) {
        return { ...box, firstValue: value };
      }
      return box;
    });

    addParameterBox(updatedBoxes);
    // setUpdatedBox(updatedBoxes);
  };

  const handleChangeSecondValue = (id, value) => {
    const updatedBoxes = parameterBoxes.map((box) => {
      if (box.id === id) {
        return { ...box, secondValue: value };
      }
      return box;
    });

    addParameterBox(updatedBoxes);
    // setUpdatedBox(updatedBoxes);
  };
  const handleClickKVPair = (id) => {
    // addParameterBox(updatedBox);
    addParameterBox((prev) => [
      ...prev,
      { id, firstValue: "", secondValue: "" },
    ]);
  };
  const deleteKeyValuePair = (uid) => {
    const newParameterBox = parameterBoxes.filter((ele) => ele.id != uid);
    addParameterBox(newParameterBox);
  };
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
      {/* first */}
      <div css={gap}>
        <div>{firstHeading}</div>
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
            fixedValue={"client_id"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
          />
        </div>
        <div>
          <ParameterElement
            fixedValue={"state"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
          />
        </div>
        <div>
          <ParameterElement
            fixedValue={"redirect_uri"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
          />
        </div>
        <div>
          <ParameterElement
            fixedValue={"response_type"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
          />
        </div>
        <div>
          <ParameterElement
            fixedValue={"scope"}
            value="true"
            placeholder="Type @ to personalize"
            color="#A1B3D3"
          />
        </div>
        <div>
          {parameterBoxes.map((ele) => {
            return (
              <>
                {ele.firstValue === "" && ele.secondValue === "" ? (
                  <ParameterElement
                    key={uuidv4()}
                    value="Enter value"
                    id={ele.id}
                    delete={deleteKeyValuePair}
                    changeFirstValue={handleChangeFirstValue}
                    changeSecondValue={handleChangeSecondValue}
                  />
                ) : ele.secondValue === "" ? (
                  <ParameterElement
                    key={uuidv4()}
                    fixedValue={ele.firstValue}
                    id={ele.id}
                    delete={deleteKeyValuePair}
                    changeFirstValue={handleChangeFirstValue}
                    changeSecondValue={handleChangeSecondValue}
                  />
                ) : ele.firstValue === "" ? (
                  <ParameterElement
                    key={uuidv4()}
                    fixedValue2={ele.secondValue}
                    id={ele.id}
                    delete={deleteKeyValuePair}
                    changeFirstValue={handleChangeFirstValue}
                    changeSecondValue={handleChangeSecondValue}
                  />
                ) : (
                  <ParameterElement
                    key={uuidv4()}
                    fixedValue={ele.firstValue}
                    fixedValue2={ele.secondValue}
                    id={ele.id}
                    delete={deleteKeyValuePair}
                    changeFirstValue={handleChangeFirstValue}
                    changeSecondValue={handleChangeSecondValue}
                  />
                )}
              </>
            );
          })}
        </div>
        <div
          css={css({
            display: "flex",
            marginTop: "1rem",
            color: "#06A6B7",
            cursor: "pointer",
            width: "14%",
          })}
          onClick={() => {
            handleClickKVPair(uuidv4());
          }}
        >
          <div>
            <span class="material-symbols-outlined">add</span>
          </div>
          <div css={css({ paddingTop: "3px" })}>KV Pair</div>
        </div>
      </div>
      {/* fourth */}
      <div css={gap}>
        <div> Headers</div>
        <div css={css({ width: "50%" })}>
          <InputElement value={"Enter Key"} />
        </div>
      </div>

      {/* fifth */}
      <div css={gap}>
        <RadioElement
          heading="API Request body type"
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
