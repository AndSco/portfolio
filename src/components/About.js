import React from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle";
import ParagraphText from "./UIComponents/ParagraphText"
import CodeTechnology from "./CodeTechnology";
import SkewedContainer from "./UIComponents/SkewedContainer";
import constants from "../constants/constants";


const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: column;
    text-align: center;
  };
`

const About = () => {
  return (
    <SkewedContainer id="aboutSection" scope="about">
      <SectionTitle title="About me" />
      <Content data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
        <ParagraphText padding={"0 0 2rem 0"}>
          Hello! I’m Andrea, a self-taught Javascript developer based in Brno,
          Czech Republic. My background is not exactly Computer Science, but rather social sciences and humanities. I've been working for the past 13 years in communications, with a particular focus on online communications in all its aspects. In the past three years, I took up web development, and I created a number of applications for my latest employer. On the front-end, I enoy working with ReactJS, as well as leverage its mobile potential with React Native. On the back-end, I usually reach for NodeJs, Express and MongoDB. This is the stack I'm currently comfortable with, but I'm always excited to learn new stuff (currently having a go at GraphQL and TypeScript). Here are a few technologies I’ve been working with recently:
        </ParagraphText>
        <CodeTechnology />
      </Content>
    </SkewedContainer>
  )
}

export default About;