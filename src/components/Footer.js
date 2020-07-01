import React from "react";
import styled from "styled-components";
import constants from "../constants/constants";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
  margin-top: 3rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    margin-top: 0;
  }
`


const Footer = () => <StyledFooter className="footer">Designed and coded w/ GatsbyJS by Andrea Scorcia | 2020</StyledFooter>
 

export default Footer;