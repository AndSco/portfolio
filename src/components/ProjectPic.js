import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const ProjectPic = ({fileName}) => {
  console.log("filename", fileName)
  return (<div style={{ backgroundImage: `url(../)`, width: 700, height: 400,  }}></div>)
}

export default ProjectPic;


// import React from "react";
// import styled from "styled-components";
// import {StaticQuery, graphql} from "gatsby";
// import BackgroundImage from "gatsby-background-image"
// import Img from "gatsby-image"


// const Image = props => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fluid(maxWidth: 700) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => {
  //     console.log("ALL IMAGES", data.images.edges);
  //     const image = data.images.edges.find(n => n.node.relativePath.includes(props.filename));
  //     console.log("IMAGE ON SCREEN", image);

  //     if (!image) {
  //       return null
  //     }

  //     const imageData = image.node.childImageSharp.fluid;
  //     return (
  //       <BackgroundImage
  //         Tag="section"
  //         className={props.className}
  //         fluid={imageData}
  //         backgroundColor={`#040e18`}
  //       >
  //         <h2>gatsby-background-image</h2>
  //       </BackgroundImage>
  //     )
  //   }}
  // />
// )

// const StyledBackgroundSection = styled(Image)`
//   width: 800px;
//   height: 60vh;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
//   opacity: .4;
// `

// export default StyledBackgroundSection

// // export default Image;

// // const ProjectPic = () => {
  

// // }