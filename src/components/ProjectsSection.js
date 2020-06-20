import React, { useState, useRef } from "react";
import styled from "styled-components";
import ProjectCard from "./UIComponents/ProjectCard";
import SectionTitle from "./UIComponents/SectionTitle"
import projects from "../constants/projects";
import constants from "../constants/constants";
import ModalDemo from "./ModalDemo";
import ProjectCard2 from "./UIComponents/ProjectCard2"


const StyledContainer = styled.div`
  padding: 6rem ${constants.padding.left} 6rem ${constants.padding.right};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: ${constants.padding.paddingResponsive};
  }
`

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentProject, setCurrentProject] = useState(null);
  const prepareProjectForModal = (project) => setCurrentProject(project);

  return (
    <StyledContainer id="projectsSection">
      {isModalOpen && (
        <ModalDemo project={currentProject} closeModal={closeModal} />
      )}
      <SectionTitle
        title="Some of my projects"
        // styles={{ borderBottom: "2px solid", paddingBottom: "1rem" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((proj, index) => {
          return (
            <ProjectCard2
              key={proj.title}
              project={proj}
              orientation={index % 2 === 0 ? "left" : "right"}
              openModal={openModal}
              prepareProjectForModal={prepareProjectForModal}
            />
          )
        })}
      </div>
    </StyledContainer>
  )
}

export default ProjectsSection;