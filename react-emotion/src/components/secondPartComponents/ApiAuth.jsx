import React from "react";
import InputElement from "../../reusable/InputElement";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ApiAuth = () => {
  const InputContainer = styled.div`
    width: 32%;
  `;
  return (
    <div>
      <div>API Key*</div>
      <InputContainer>
        <InputElement value={"Enter API Key"} />
      </InputContainer>
    </div>
  );
};

export default ApiAuth;
