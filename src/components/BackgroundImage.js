import React, {useContext} from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, {ThemeContext} from "styled-components";
import BackgroundImage from "gatsby-background-image";
import constants from "../constants/constants";


const BackgroundSection = ({ className }) => {
  const themeContext = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "andrea_bw.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);   
  
  const imageData = data.placeholderImage.childImageSharp.fluid;
  const backgroundStack = [
    themeContext.overlayGradient,
    imageData,
  ]  
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundStack}
    >
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  min-width: 450px;
  height: 450px;
  background-color: ${props => props.theme.highlights};
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s linear;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 150px;
    min-width: 150px;
    height: 150px;
  }
`


export default StyledBackgroundSection
