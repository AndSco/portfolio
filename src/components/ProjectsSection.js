import React, { useState, useRef } from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle"
import projects from "../constants/projects";
import constants from "../constants/constants";
import ModalDemo from "./ModalDemo";
import ProjectCard2 from "./UIComponents/ProjectCard";
import { useModal } from "../constants/hooks";


const StyledContainer = styled.div`
  padding: 6rem ${constants.padding.left} 6rem ${constants.padding.right};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: ${constants.padding.paddingResponsive};
  }
`

const ExplanationParagraph = styled.p`
  max-width: 900px;
  align-self: flex-start;

  @media (max-width: ${constants.breakPoints.medium}) {
    align-self: center;
    text-align: center;
  }
`

const ProjectsSection = () => {
  const { isModalOpen, handleModal } = useModal();
  const [currentProject, setCurrentProject] = useState(null);
  const prepareProjectForModal = (project) => setCurrentProject(project);

  return (
    <StyledContainer id="projectsSection">
      {isModalOpen && (
        <ModalDemo project={currentProject} handleModal={handleModal} />
      )}
      <SectionTitle
        title="Some of my projects"
        // styles={{ borderBottom: "2px solid", paddingBottom: "1rem" }}
      />
      <ExplanationParagraph>A few of my projects have been built for internal use at my former workplace. Since these contain sensitive information, they are accessible only via authentication... That's why for each project I included a short video-demo showing its main features.</ExplanationParagraph>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((proj, index) => {
          return (
            <ProjectCard2
              key={proj.title}
              project={proj}
              orientation={index % 2 === 0 ? "left" : "right"}
              handleModal={handleModal}
              prepareProjectForModal={prepareProjectForModal}
            />
          )
        })}
      </div>
    </StyledContainer>
  )
}

export default ProjectsSection;