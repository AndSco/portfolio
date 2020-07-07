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


const Footer = () => <StyledFooter className="footer">Designed & coded w/ GatsbyJS by Andrea Scorcia in 2020 | <u><span style={{marginLeft: ".5rem"}}><a href="https://github.com/AndSco/portfolio" target="_blank">See source code</a></span></u></StyledFooter>
 

export default Footer;