import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { ThemeContext } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Overlay = styled.div`
  width: 50vw;
  max-width: 800px;
  height: 50vh;
  max-height: 400px;
  opacity: 0.3;
  background-color: black;
  display: flex;
  justify-content: ${props =>
    props.orientation === "right" ? "flex-start" : "flex-end"};
  padding: 1rem 2rem;
  transition: all 0.35s linear;

  &:hover {
    opacity: 0.5;
  }
`

const ProjectImage = ({
  project,
  className,
  orientation,
  openModal,
  prepareProjectForModal,
}) => {
  const { title, description, picName, demoUrl } = project;
  const [isBeingChecked, setIsBeingChecked] = useState(false);
  
  const launchModal = (project) => {
    prepareProjectForModal(project);
    openModal();
  }

  // useEffect(() => console.log("is active?", isBeingChecked), [isBeingChecked]);

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n =>
          n.node.relativePath.includes(picName)
        )

        if (!image) {
          return null
        }

        const imageData = image.node.childImageSharp.fluid

        return (
          <div
            style={{
              position: "absolute",
              right: orientation === "left" ? 0 : undefined,
              WebkitBoxShadow: "6px 7px 9px -4px rgba(0,0,0,0.38)", 
              boxShadow: "6px 7px 9px -4px rgba(0,0,0,0.38)"
            }}
            onMouseEnter={() => setIsBeingChecked(true)}
            onMouseLeave={() => setIsBeingChecked(false)}
          >
            <BackgroundImage
              fluid={imageData}
              Tag={`section`}
              className={className}
            >
              <Overlay orientation={orientation}>
                <h1
                  onClick={() => launchModal(project)}
                  style={{
                    color: "white",
                    opacity: isBeingChecked ? 1 : 0,
                    alignSelf: "flex-end",
                    cursor: "pointer"
                  }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: ".5rem" }}
                    icon="play-circle"
                  />
                  DEMO
                </h1>
              </Overlay>
            </BackgroundImage>
          </div>
        )
      }}
    />
  )
}


export default ProjectImage




// import ReaState } from "react";
// import styled from "styled-components";
// import { graphql, useStaticQuery, StaticQuery } from "gatsby"
// import BackgroundImage from "gatsby-background-image";
// import { ThemeContext } from "styled-components";

// const Overlay = styled.div`
//   width: 60vw;
//   height: 60vh;
//   opacity: 0.8;
//   background-color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all .35s linear;

//   &:hover {
//     opacity: 0;
//   }
// `

// const ProjectImage = ({picName, className, orientation}) => {
//   console.log("pic", picName);
//   const themeContext = useContext(ThemeContext);
//   console.log("THEMECONT", themeContext);
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "covid19.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 700) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   const imageData = data.placeholderImage.childImageSharp.fluid;
//   console.log("IMAGE DATA", imageData);
//   const backgroundStack = [themeContext.overlayGradient, imageData];  

//   return (
//     <div
//       style={{
//         position: "absolute",
//         right: orientation === "left" ? 0 : undefined,
//         // opacity: 0.4,
//       }}
//     >
//       <BackgroundImage fluid={imageData} Tag={`section`} className={className}>
//         {/* <div style={{width: 700,
//           height: 350,
//           opacity: 1,
//           backgroundColor: "black", 
//           display: "flex", 
//           justifyContent: "center", 
//           alignItems: "center", 
//           zIndex: 100
//         }}><h1 className="demo">DEMO</h1></div> */}
//         <Overlay>
//           <h1 className="demo">DEMO</h1>
//         </Overlay>
//       </BackgroundImage>
//     </div>
//   )
// }

// const PicContainer = styled(ProjectImage)`
//   z-index: -2;
//   /* position: "absolute"; */
//   right: ${props => (props.orientation === "left" ? 0 : undefined)};
//   opacity: .7;
//   width: 70%;
//   height: 60vh;

//   &:hover {
//     opacity: 1;
//   }
// `



// export default ProjectImage;
