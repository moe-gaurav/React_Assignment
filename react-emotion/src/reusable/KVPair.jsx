import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

import ParameterElement from "./ParameterElement";

const HeadersChild = () => {
  const [parameterBoxes, addParameterBox] = useState([]);
  const [limit, setLimit] = useState(0);

  const handleChangeFirstValue = (id, value) => {
    const updatedBoxes = parameterBoxes.map((box) => {
      if (box.id === id) {
        return { ...box, firstValue: value };
      }
      return box;
    });

    addParameterBox(updatedBoxes);
  };

  const handleChangeSecondValue = (id, value) => {
    const updatedBoxes = parameterBoxes.map((box) => {
      if (box.id === id) {
        return { ...box, secondValue: value };
      }
      return box;
    });

    addParameterBox(updatedBoxes);
  };
  const handleClickKVPair = (id) => {
    if (limit >= 5) {
      return;
    }
    setLimit(limit + 1);
    addParameterBox((prev) => [
      ...prev,
      { id, firstValue: "", secondValue: "" },
    ]);
  };
  const deleteKeyValuePair = (uid) => {
    const newParameterBox = parameterBoxes.filter((ele) => ele.id != uid);
    addParameterBox(newParameterBox);
    setLimit(limit - 1);
  };

  const AddKeyValuePairContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    color: ${(props) => (props.limit >= 5 ? "rgb(161, 179, 211)" : "#06A6B7")};
    cursor: ${(props) => (props.limit >= 5 ? "not-allowed" : "pointer")};
    width: 14%;

    .kVPair-heading {
      padding-top: 3px;
    }
  `;

  return (
    <div>
      <div>
        {parameterBoxes.map((ele) => {
          return (
            <>
              {ele.firstValue === "" && ele.secondValue === "" ? (
                <ParameterElement
                  key={ele.id}
                  value="Enter value"
                  fixedValue=""
                  fixedValue2=""
                  id={ele.id}
                  delete={deleteKeyValuePair}
                  changeFirstValue={handleChangeFirstValue}
                  changeSecondValue={handleChangeSecondValue}
                />
              ) : ele.secondValue === "" ? (
                <ParameterElement
                  key={ele.id}
                  fixedValue={ele.firstValue}
                  fixedValue2=""
                  id={ele.id}
                  delete={deleteKeyValuePair}
                  changeFirstValue={handleChangeFirstValue}
                  changeSecondValue={handleChangeSecondValue}
                />
              ) : ele.firstValue === "" ? (
                <ParameterElement
                  key={ele.id}
                  fixedValue2={ele.secondValue}
                  fixedValue=""
                  id={ele.id}
                  delete={deleteKeyValuePair}
                  changeFirstValue={handleChangeFirstValue}
                  changeSecondValue={handleChangeSecondValue}
                />
              ) : (
                <ParameterElement
                  key={ele.id}
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
      <AddKeyValuePairContainer
        limit={limit}
        onClick={() => {
          handleClickKVPair(uuidv4());
        }}
      >
        <div>
          <span class="material-symbols-outlined">add</span>
        </div>
        <div className="kVPair-heading">KV Pair</div>
      </AddKeyValuePairContainer>
    </div>
  );
};

export default HeadersChild;
