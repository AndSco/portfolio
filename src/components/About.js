import React from "react"
import styled from "styled-components"
import SectionTitle from "./UIComponents/SectionTitle"
import ParagraphText from "./UIComponents/ParagraphText"
import CodeTechnology from "./CodeTechnology"
import SkewedContainer from "./UIComponents/SkewedContainer"
import constants from "../constants/constants"

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: column;
    text-align: center;
    line-height: ${constants.fonts.textSizeSmallerDevices.lineHeight};
  }
`

const About = () => {
  return (
    <SkewedContainer id="aboutSection" scope="about">
      <Content>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionTitle title="About me" />
          <ParagraphText
            padding={"0 0 2rem 0"}
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            Hello! I’m Andrea, a self-taught Javascript developer based in Brno,
            Czech Republic. I've been working for more than 10 years in
            international organisations such as the European Commission,
            managing their online & visual communication as Digital Leader. In
            the past three years, I took up web development and created a number
            of web & mobile applications for work and for fun. When it comes to
            front-end, my tool of choice is ReactJS (with functional components
            & hooks), and React Native on mobile (with Expo). I also love the
            development experience offered by GatsbyJS. On the back-end side, I
            usually reach for NodeJs, Express and MongoDB. This is the stack I'm
            currently comfortable with, but I'm always eager to learn new stuff.
          </ParagraphText>
        </div>
        <CodeTechnology />
      </Content>
    </SkewedContainer>
  )
}

export default About
