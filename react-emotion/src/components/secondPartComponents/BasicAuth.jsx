import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import InputElement from "../../reusable/InputElement";

const BasicAuthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 68%;
  gap: 12px;
  .child-container {
    width: 42%;
    min-width: 20rem;
  }
  .child-container-heading {
    width: 100%;
  }
`;

const BasicAuth = () => {
  return (
    <BasicAuthContainer>
      <div className="child-container">
        <div className="child_container_heading">User Name*</div>
        <InputElement value={"Enter user name"} />
      </div>
      <div className="child-container">
        <div className="child_container_heading">Password*</div>
        <InputElement value={"Enter password"} />
      </div>
    </BasicAuthContainer>
  );
};

export default BasicAuth;
