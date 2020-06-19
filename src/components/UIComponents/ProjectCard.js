import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";
import ProjectImage from "../UIComponents/ProjectImage";
import ClickableIcon from "../UIComponents/ClickableIcon";


const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props =>
    props.orientation === "left" ? "flex-start" : "flex-end"};
  width: 45vw;
  min-height: 280px;
  position: absolute;
  right: ${props => (props.orientation === "right" ? 0 : undefined)};
  z-index: 10;
`


const Title = styled.h3`
  font-size: .9rem;
  font-weight: 700;
  margin: 0 .8rem;
  color: ${props => props.theme.highlights};
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  align-items: center;
  background: ${props => props.theme.aboutStrip};
  color: ${props => props.theme.text};
  padding: 1rem 1.5rem;
  -webkit-box-shadow: 6px 5px 9px -4px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 5px 9px -4px rgba(0, 0, 0, 0.38);
`



const StackList = ({stack}) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{display: "flex"}}>
      {stack.map(tech => <h6 style={{margin: "0 .7rem", color: theme.secondaryDetails, fontSize: ".7rem", fontWeight: 300}} key={tech}>  {tech}</h6>)}
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
      
      <ClickableIcon
        icon="external-link-alt"
        color={theme.secondaryDetails}
      />
    </div>
  )
}

const ProjectCard = ({ project, orientation, openModal, prepareProjectForModal}) => {
  const { title, description, stack, picName, demoUrl } = project;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        margin: "16rem 0",
      }}
    >
      <TextSide orientation={orientation}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StackList stack={stack} />
        <LinksSection />
      </TextSide>
      <ProjectImage
        project={project}
        picName={picName}
        demoUrl={demoUrl}
        orientation={orientation}
        openModal={openModal}
        prepareProjectForModal={prepareProjectForModal}
      />
    </div>
  )  
}

export default ProjectCard;