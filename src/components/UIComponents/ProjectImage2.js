import React, { useState } from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../constants/constants";


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
  padding: 1rem 2rem;
  transition: all 0.35s linear;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 90vw;
    height: 25vh;
    min-height: 280px;
    opacity: 0.6;
  }
`

const ProjectImage = ({
  project,
  className,
  orientation,
  openModal,
  prepareProjectForModal,
}) => {
  const { picName } = project
  const [isBeingChecked, setIsBeingChecked] = useState(false)

  const launchModal = project => {
    prepareProjectForModal(project)
    openModal()
  }

  const ImageContainer = styled.div`
    -webkit-box-shadow: 6px 7px 9px -4px rgba(0, 0, 0, 0.38);
    box-shadow: 6px 7px 9px -4px rgba(0, 0, 0, 0.38);
    transition: all 0.35s linear;

    @media (max-width: ${constants.breakPoints.medium}) {
      -webkit-box-shadow: none;
      box-shadow: none;
      margin-bottom: 1rem;
    }
  `

  const PlayButton = styled.h1`
    color: white;
    opacity: ${props => (props.isBeingChecked ? 1 : 0)};
    cursor: pointer;
    transition: all 0.35s linear;

    @media (max-width: ${constants.breakPoints.medium}) {
      opacity: 1;
    }
  `

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
          <ImageContainer
            onMouseEnter={() => setIsBeingChecked(true)}
            onMouseLeave={() => setIsBeingChecked(false)}
          >
            <BackgroundImage
              fluid={imageData}
              Tag={`section`}
              className={className}
            >
              <Overlay orientation={orientation}>
                <PlayButton
                  isBeingChecked={isBeingChecked}
                  onClick={() => launchModal(project)}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: ".5rem" }}
                    icon="play-circle"
                  />
                  DEMO
                </PlayButton>
              </Overlay>
            </BackgroundImage>
          </ImageContainer>
        )
      }}
    />
  )
}

export default ProjectImage

