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
      <Content data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionTitle title="About me" />
          <ParagraphText padding={"0 0 2rem 0"}>
            Hello, I'm Andrea, a self-taught Javascript and ReactJS developer
            based in Brno, Czech Republic.
            <br />
            <br />
            I've been working for more than ten years in communications,
            including with international organisations such as the European
            Commission, managing the online & visual communication for its
            Representation in Malta. <br />
            <br />
            Over the past three years, I took up web development and created a
            number of web & mobile applications for work and for fun. <br />
            <br />
            When it comes to front-end, my tool of choice is ReactJS (with
            functional components & hooks), with the additional safety net of
            TypeScript. I have also experimented with React Native to bring my
            apps on small screens. <br />
            <br />
            On the back-end side, I usually reach for NodeJS, Express and
            MongoDB. This is the stack I'm currently comfortable with, but I'm
            always eager to learn new stuff!
          </ParagraphText>
        </div>
        <CodeTechnology />
      </Content>
    </SkewedContainer>
  )
}

export default About
