import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import FlexColumn from "./UIComponents/FlexColumn"
import styled, {keyframes} from "styled-components";
import constants from "../constants/constants";
import Circles from "./Circles"
import ButtonLight from "./UIComponents/ButtonLight";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInDiv from "./UIComponents/FadeInDiv";


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${constants.breakPoints.medium}) {
    order: 2;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }  
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6vh ${constants.padding.right};
  height: 100vh;
  margin-bottom: 2.4rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: 0;
    /* padding-top: 3rem; */
    flex-direction: column;
    height: auto;
    align-items: center;
    margin-bottom: 7rem;
  }

  @media (min-width: ${constants.breakPoints.large}) {
    padding-top: 15vh;
  };
`

const StyledExcerpt = styled.p`
  color: ${props => props.theme.text};
  max-width: 300px;
  font-family: ${constants.fonts.smallText.fontFamily};
  font-size: ${constants.fonts.smallText.size};
  font-weight: ${constants.fonts.smallText.weight};
  transition: color 0.5s linear;
  margin: 1.4em 0;

  @media (max-width: ${constants.breakPoints.medium}) {
    max-width: 200px;
    font-size: 1rem;
  }
`


const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <AnimatedTitle />
        <FadeInDiv>
          <StyledExcerpt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in varius
            libero. Duis non pharetra felis. Donec maximus, nulla sit amet
            consectetur pulvinar, nunc dolor.
          </StyledExcerpt>
          <AnchorLink to="/#projectsSection">
            <ButtonLight title="See projects" width={200} textSize=".9rem" />
          </AnchorLink>
        </FadeInDiv>
      </TextContainer>
      <Circles />
    </HeroContainer>
  )
}

export default Hero;