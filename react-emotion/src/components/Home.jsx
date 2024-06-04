import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import FirstPartSelection from "./FirstPartSelection";
import SecondPartDescription from "./SecondPartDescription";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectionChange = (value) => {
    setSelectedType(value);
  };

  const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-direction: column;
    min-height: 42rem;
    border: 2px solid grey;
    padding: 10px 10px 10px 19px;
  `;
  return (
    <MainContainer>
      <FirstPartSelection handleSelectionChange={handleSelectionChange} />
      <SecondPartDescription value={selectedType} />
    </MainContainer>
  );
};

export default Home;
