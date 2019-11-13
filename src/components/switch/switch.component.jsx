import React from "react";
import Switch from "@material-ui/core/Switch";

const Switches = ({
  checked,
  onChangeHandlerFunc,
  value,
  color,
  className
}) => (
  <Switch
    className={className}
    checked={checked}
    onChange={onChangeHandlerFunc}
    value={value}
    color={color}
  />
);

export default Switches;
