import React from "react";
import Icon from "@material-ui/core/Icon";
import acorn from "./assets/acorns-logo-white.svg";

const AcornIcon = props => {
  return (
    <Icon {...props}>
      <img src={acorn} height="100%" alt="acorn-icon" />
    </Icon>
  );
};

export default AcornIcon;
