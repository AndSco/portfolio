import React from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle";
import ParagraphText from "./UIComponents/ParagraphText"
import CodeTechnology from "./CodeTechnology";
import constants from "../constants/constants";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.aboutStrip}; 
  margin-bottom: 100px 0 2rem 0;
  padding: 1.6rem ${constants.padding.left} 3rem ${constants.padding.right};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    transform: skewY(5deg);
    background: inherit;
    /* background-color: ${props => props.theme.aboutStrip}; */
    z-index: -1;
  }
`


const About = () => {
  return (
    <StyledContainer>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <ParagraphText padding={"0 0 2rem 0"}>
          Hello! I’m Andrea, a self-taught Javascript developer based in Brno,
          Czech Republic. applications, or anything in between. I enjoy creating
          things that live on the internet, whether that be websites,
          applications, or anything in between. My goal is to always build
          products that provide pixel-perfect, performant experiences. Shortly
          after graduating from Northeastern University, I joined the engineering
          team at Upstatement where I work on a wide variety of interesting and
          meaningful projects on a daily basis. Here are a few technologies I’ve
          been working with recently:
        </ParagraphText>
      </div>
      <CodeTechnology />
    </StyledContainer>
  )
}

export default About;