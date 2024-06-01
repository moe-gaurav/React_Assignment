import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FirstPartSelection from "./FirstPartSelection";
import SecondPartDescription from "./SecondPartDescription";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectionChange = (value) => {
    setSelectedType(value);
  };
  return (
    <>
      <div
        id="main_container"
        css={css({
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          flexDirection: "column",

          minHeight: "42rem",
          border: "2px solid grey",
          padding: "10px 10px 10px 19px",
        })}
      >
        <FirstPartSelection handleSelectionChange={handleSelectionChange} />
        <SecondPartDescription value={selectedType} />
      </div>
    </>
  );
};

export default Home;
