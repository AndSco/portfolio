import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Overlay = styled.div`
  width: 50vw;
  max-width: 800px;
  height: 50vh;
  max-height: 400px;
  opacity: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-content: ${props =>
    props.orientation === "right" ? "flex-start" : "flex-end"}; */
  padding: 1rem 2rem;
  transition: all 0.35s linear;

  &:hover {
    opacity: 0.7;
  }
`

const ProjectImage = ({
  project,
  className,
  orientation,
  openModal,
  prepareProjectForModal,
}) => {
  const { title, description, picName, demoUrl } = project
  const [isBeingChecked, setIsBeingChecked] = useState(false)

  const launchModal = project => {
    prepareProjectForModal(project)
    openModal()
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
              WebkitBoxShadow: "6px 7px 9px -4px rgba(0,0,0,0.38)",
              boxShadow: "6px 7px 9px -4px rgba(0,0,0,0.38)",
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
                    cursor: "pointer",
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

