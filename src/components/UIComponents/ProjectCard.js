import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import ProjectImage2 from "./ProjectImage"
import ClickableIcon from "./ClickableIcon";
import constants from "../../constants/constants";

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props =>
    props.orientation === "left" ? "flex-start" : "flex-end"};
  width: 45vw;
  max-width: 320px;
  order: ${props => (props.orientation === "right" ? 1 : 0)};
  background: ${props => props.theme.aboutStrip};
  padding: 50px 40px;
  box-shadow: rgba(0, 0, 0, 0.38) 6px 7px 9px -4px;
  margin-left: ${props => (props.orientation === "right" ? "2rem" : 0)};
  margin-right: ${props => (props.orientation === "right" ? 0 : "2rem")};
  text-align: ${props => (props.orientation === "right" ? "right" : "left")};

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

  &::after {
    position: absolute;
    content: "";
    display: block;
    transform: translateY(-10px);
    width: 100%;
    height: 10px;
    background-color: ${props => props.theme.underline};
    z-index: -2;
    transition: all 0.5s linear;
  }

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
  margin: 0.2rem 0.4rem;
  color: ${props => props.theme.secondaryDetails};
  font-size: 0.7rem;
  font-weight: 300;

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 12px;
  }
`

const StackListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

const StackList = ({ stack }) => {
  const theme = useContext(ThemeContext)
  return (
    <StackListContainer>
      {stack.map(tech => (
        <TechItem key={tech}>{tech}</TechItem>
      ))}
    </StackListContainer>
  )
}

const LinksSection = ({url, githubRepository}) => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ display: "flex", margin: "0 .8rem", width: 50, justifyContent: "space-between" }}>
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
  openModal,
  prepareProjectForModal,
}) => {
  const { title, description, stack, picName, demoUrl, url, githubRepository } = project;
  return (
    <CardContainer
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <TextSide orientation={orientation}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StackList stack={stack} />
        <LinksSection url={url} githubRepository={githubRepository} />
      </TextSide>
      <ProjectImage2
        project={project}
        picName={picName}
        demoUrl={demoUrl}
        orientation={orientation}
        openModal={openModal}
        prepareProjectForModal={prepareProjectForModal}
      />
    </CardContainer>
  )
}

export default ProjectCard
