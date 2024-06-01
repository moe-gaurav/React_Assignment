import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioElement(props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {props.heading}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value={props.first}
          control={<Radio />}
          label={props.first}
          onClick={() => {
            props.removeAPIBody(true);
          }}
        />
        <FormControlLabel
          value={props.second}
          control={<Radio />}
          label={props.second}
          onClick={() => {
            props.removeAPIBody(false);
          }}
        />
        <FormControlLabel
          value={props.third}
          control={<Radio />}
          label={props.third}
          onClick={() => {
            props.removeAPIBody(false);
          }}
        />
        <FormControlLabel
          value={props.fourth}
          control={<Radio />}
          label={props.fourth}
          onClick={() => {
            props.removeAPIBody(false);
          }}
        />
      </RadioGroup>
    </FormControl>
  );
}
