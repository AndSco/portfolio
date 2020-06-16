import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./UIComponents/ProjectCard";
import SectionTitle from "./UIComponents/SectionTitle"
import projects from "../constants/projects";
import constants from "../constants/constants";
import ModalDemo from "./ModalDemo";

const StyledContainer = styled.div`
  padding: 6rem ${constants.padding.left} 3rem ${constants.padding.right};
  display: flex;
  flex-direction: column;
`

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentProject, setCurrentProject] = useState(null);
  const prepareProjectForModal = (project) => setCurrentProject(project);

  return (
    <StyledContainer>
      {isModalOpen && <ModalDemo project={currentProject} closeModal={closeModal} />}
      <SectionTitle>Some of my projects</SectionTitle>
      <div style={{display: "flex", flexDirection: "column"}}>
        {projects.map((proj, index) => {
          return (
            <ProjectCard
              key={proj.title}
              project={proj}
              orientation={index % 2 === 0 ? "left" : "right"}
              openModal={openModal}
              prepareProjectForModal={prepareProjectForModal}
            />
          )})}
      </div>
    </StyledContainer>
  )
}

export default ProjectsSection;