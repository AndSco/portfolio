import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import ProjectImage from "./ProjectImage"
import ClickableIcon from "./ClickableIcon"
import constants from "../../constants/constants"
import { lightTheme } from "./Themes"

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 45vw;
  max-width: 400px;
  order: ${props => (props.orientation === "right" ? 1 : 0)};
  background: ${props => props.theme.aboutStrip};
  padding: 50px 40px;
  box-shadow: rgba(0, 0, 0, 0.38) 6px 7px 9px -4px;
  margin-left: ${props => (props.orientation === "right" ? "2rem" : 0)};
  margin-right: ${props => (props.orientation === "right" ? 0 : "2rem")};

  @media (max-width: ${constants.breakPoints.medium}) {
    order: 2;
    width: 90vw;
    max-width: 90vw;
    margin: 0;
    box-shadow: none;
    padding: ${constants.padding.paddingResponsive};
  }
`

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  position: relative;
  color: ${props => props.theme.highlights};
  z-index: 2;
  transition: all 0.5s linear;

  background-image: ${props =>
    `linear-gradient(120deg, ${props.theme.underline} 0%, ${props.theme.underline} 100%)`};
  background-repeat: no-repeat;
  background-size: 100% 0.5em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 22px;
  }
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  align-items: center;
  color: ${props => props.theme.text};
  margin: 1rem 0;

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: ${constants.fonts.textSizeSmallerDevices.size};
    line-height: ${constants.fonts.textSizeSmallerDevices.lineHeight};
  }
`

const TechItem = styled.h6`
  margin: 0.3rem 0.4rem;
  color: ${props => props.theme.secondaryDetails};
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.5em;
  background-color: white;
  border-radius: 40px;
  border: 1px solid;
  color: ${props =>
    props.theme === lightTheme
      ? props.theme.secondaryDetails
      : props.theme.body};

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 12px;
  }
`

const StackListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

const StackList = ({ stack, orientation }) => {
  return (
    <StackListContainer orientation={orientation}>
      {stack.map(tech => (
        <TechItem key={tech}>{tech}</TechItem>
      ))}
    </StackListContainer>
  )
}

const LinksSection = ({ url, githubRepository }) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      style={{
        display: "flex",
        margin: "0 .8rem",
        width: 50,
        justifyContent: "space-between",
      }}
    >
      <ClickableIcon
        icon={["fab", "github"]}
        color={theme.secondaryDetails}
        link={githubRepository}
      />

      {url !== "NA" && (
        <ClickableIcon
          icon="external-link-alt"
          color={theme.secondaryDetails}
          link={url}
        />
      )}
    </div>
  )
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 6rem 0;

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: column;
    margin: 3.2rem 0;
  }
`

const ProjectCard = ({
  project,
  orientation,
  handleModal,
  prepareProjectForModal,
}) => {
  const {
    title,
    description,
    stack,
    picName,
    demoUrl,
    url,
    githubRepository,
  } = project
  return (
    <CardContainer
      data-sal="slide-up"
      data-sal-delay="10"
      data-sal-easing="ease"
    >
      <TextSide orientation={orientation}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StackList stack={stack} orientation={orientation} />
        <LinksSection url={url} githubRepository={githubRepository} />
      </TextSide>
      <ProjectImage
        project={project}
        picName={picName}
        demoUrl={demoUrl}
        orientation={orientation}
        openModal={handleModal}
        prepareProjectForModal={prepareProjectForModal}
      />
    </CardContainer>
  )
}

export default ProjectCard
