import React from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle";
import ParagraphText from "./UIComponents/ParagraphText"
import CodeTechnology from "./CodeTechnology";
import SkewedContainer from "./UIComponents/SkewedContainer";


const About = () => {
  return (
    <SkewedContainer id="aboutSection" scope="about">
      <SectionTitle title="About me" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ParagraphText padding={"0 0 2rem 0"}>
          Hello! I’m Andrea, a self-taught Javascript developer based in Brno,
          Czech Republic. applications, or anything in between. I enjoy creating
          things that live on the internet, whether that be websites,
          applications, or anything in between. My goal is to always build
          products that provide pixel-perfect, performant experiences. Shortly
          after graduating from Northeastern University, I joined the
          engineering team at Upstatement where I work on a wide variety of
          interesting and meaningful projects on a daily basis. Here are a few
          technologies I’ve been working with recently:
        </ParagraphText>
        <CodeTechnology />
      </div>
    </SkewedContainer>
  )
}

export default About;