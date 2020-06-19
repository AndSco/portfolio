import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import FlexColumn from "./UIComponents/FlexColumn"
import styled, {keyframes} from "styled-components";
import constants from "../constants/constants";
import Circles from "./Circles"
import ButtonLight from "./UIComponents/ButtonLight";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInDiv from "./UIComponents/FadeInDiv";

const StyledExcerpt = styled.p`
  color: ${props => props.theme.text};
  width: 360px;
  font-family: ${constants.fonts.smallText.fontFamily};
  font-size: ${constants.fonts.smallText.size};
  font-weight: ${constants.fonts.smallText.weight};
  transition: color 0.5s linear;
  margin: 1.4em 0;
`


const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: `0 ${constants.padding.right}`,
        height: "90vh",
        marginBottom: "2.4rem",
      }}
    >
      <FlexColumn>
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
      </FlexColumn>
      <Circles />
    </div>
  )
}

export default Hero;