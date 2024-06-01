import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FirstPartSelection = ({ handleSelectionChange }) => {
  const [authenticationMethod, setAuthenticationMethod] = React.useState("");

  const handleChange = (event) => {
    setAuthenticationMethod(event.target.value);
    handleSelectionChange(event.target.value);
  };

  return (
    <Box sx={{ width: 350, minWidth: 120 }}>
      <div
        css={css({
          fontSize: "larger",
        })}
      >
        Authentication*
      </div>

      <FormControl
        fullWidth
        css={css({
          marginTop: "15px",
        })}
      >
        <InputLabel id="demo-simple-select-label">
          Select Authentication
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={authenticationMethod}
          label="Select Authentication"
          onChange={handleChange}
        >
          <MenuItem value={"No Auth"}>No Auth</MenuItem>
          <MenuItem value={"Api Auth"}>Api Auth</MenuItem>
          <MenuItem value={"Basic Auth"}>Basic Auth</MenuItem>
          <MenuItem value={"OAuth2"}>OAuth2</MenuItem>
          <MenuItem value={"Session Auth"}>Session Auth</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FirstPartSelection;
