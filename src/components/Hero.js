import React from "react"
import AnimatedTitle from "./AnimatedTitle"
import styled from "styled-components"
import constants from "../constants/constants"
import Circles from "./Circles"
import ButtonLight from "./UIComponents/ButtonLight"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import FadeInDiv from "./UIComponents/FadeInDiv"

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
    padding-top: 2vh;
    flex-direction: column;
    height: auto;
    align-items: center;
    margin-bottom: 7rem;
  }

  @media (min-width: ${constants.breakPoints.large}) {
    padding-top: 15vh;
    padding-left: 15rem;
  }
`

const StyledExcerpt = styled.p`
  color: ${props => props.theme.text};
  max-width: 330px;
  font-size: ${constants.fonts.smallText.size};
  font-weight: ${constants.fonts.smallText.weight};
  transition: color 0.5s linear;
  margin: 1.4em 0;

  @media (max-width: ${constants.breakPoints.medium}) {
    max-width: 200px;
  }
`

const Hero = () => {
  return (
    <HeroContainer id="top">
      <TextContainer>
        <AnimatedTitle />
        <FadeInDiv>
          <StyledExcerpt>
            I'd love to join a team of experienced colleagues to improve my
            skills and contribute to meaningful projects.
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

export default Hero
