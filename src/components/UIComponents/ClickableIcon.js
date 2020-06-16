import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ClickableIcon = ({icon, size, color, styles}) => {
  return <FontAwesomeIcon icon={icon} style={{cursor: "pointer", ...styles}} size={size} color={color} />
}


export default ClickableIcon;