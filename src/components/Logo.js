import React from "react";
import styled from "styled-components";
import constants from "../constants/constants";


const Logo = styled.h1`
  font-family: "Gugi";
  font-size: 1.5rem;
  padding: 14px;
  border: 1px solid ${props => props.theme.highlights};
  border-radius: 50%;
  color: ${props => props.theme.highlights};
  margin: 0;
  transition: all 0.5s linear;
`

export default Logo;