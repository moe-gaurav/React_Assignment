import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ApiAuth from "./secondPartComponents/ApiAuth";
import BasicAuth from "./secondPartComponents/BasicAuth";
import OAuth2 from "./secondPartComponents/OAuth2";
import SessionAuth from "./secondPartComponents/SessionAuth";
const SecondPartDescription = ({ value }) => {
  const Container = styled.div`
    margin-top: 1rem;
    font-family: sans-serif;
  `;
  switch (value) {
    case "No Auth":
      return <div></div>;
    case "Api Auth":
      return (
        <Container>
          <ApiAuth />
        </Container>
      );
    case "Basic Auth":
      return (
        <Container>
          <BasicAuth />
        </Container>
      );
    case "OAuth2":
      return (
        <Container>
          <OAuth2 />
        </Container>
      );
    case "Session Auth":
      return (
        <Container>
          <SessionAuth />
        </Container>
      );
  }
};

export default SecondPartDescription;
