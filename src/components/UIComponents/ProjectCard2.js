import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import ProjectImage2 from "../UIComponents/ProjectImage2"
import ClickableIcon from "../UIComponents/ClickableIcon";
import constants from "../../constants/constants";

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props =>
    props.orientation === "left" ? "flex-start" : "flex-end"};
  width: 45vw;
  max-width: 320px;
  min-height: 450px;
  order: ${props => (props.orientation === "right" ? 1 : 0)};
  z-index: -19;
  background: ${props => props.theme.aboutStrip};
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.38) 6px 7px 9px -4px;
  margin-left: ${props => (props.orientation === "right" ? "2rem" : 0)};
  margin-right: ${props => (props.orientation === "right" ? 0 : "2rem")};
  text-align: ${props => (props.orientation === "right" ? "right" : "left")};

  @media (max-width: ${constants.breakPoints.medium}) {
    order: 2;
    width: 90vw;
    max-width: 90vw;
    margin: 0;
    min-height: 350px;
    box-shadow: none;
  }
`

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
  color: ${props => props.theme.highlights};

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1.2rem;
  };
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  align-items: center;
  color: ${props => props.theme.text};

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1rem;
  }
`

const StackList = ({ stack }) => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ display: "flex" }}>
      {stack.map(tech => (
        <h6
          style={{
            margin: "0 .7rem",
            color: theme.secondaryDetails,
            fontSize: ".7rem",
            fontWeight: 300,
          }}
          key={tech}
        >
          {" "}
          {tech}
        </h6>
      ))}
    </div>
  )
}

const LinksSection = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ display: "flex", margin: "0 .8rem" }}>
      <ClickableIcon
        icon={["fab", "github"]}
        styles={{ marginRight: ".8rem" }}
        color={theme.secondaryDetails}
      />

      <ClickableIcon icon="external-link-alt" color={theme.secondaryDetails} />
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
  const { title, description, stack, picName, demoUrl } = project
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
        <LinksSection />
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
