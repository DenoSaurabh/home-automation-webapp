import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFields = ({className, label, margin, variant, color, value, onChangeHandler}) => (
  <TextField
    className={className}
    label={label}
    margin={margin}
    variant={variant}
    color={color}
    value={value}
    onChange={onChangeHandler}
  />
);

export default TextFields;
