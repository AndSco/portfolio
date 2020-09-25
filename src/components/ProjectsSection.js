import React, { useState } from "react"
import styled from "styled-components"
import SectionTitle from "./UIComponents/SectionTitle"
import projects from "../constants/projects"
import constants from "../constants/constants"
import ModalDemo from "./ModalDemo"
import ProjectCard from "./UIComponents/ProjectCard"
import { useModal } from "../constants/hooks"
import FlexColumn from "./UIComponents/FlexColumn"

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
  line-height: 1.7rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    align-self: center;
    text-align: center;
  }
`

const ProjectsSection = () => {
  const { isModalOpen, handleModal } = useModal()
  const [currentProject, setCurrentProject] = useState(null)
  const prepareProjectForModal = project => setCurrentProject(project)

  return (
    <StyledContainer id="projectsSection">
      {isModalOpen && (
        <ModalDemo project={currentProject} handleModal={handleModal} />
      )}
      <FlexColumn
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease"
      >
        <SectionTitle title="Some of my projects" />
        <ExplanationParagraph>
          A few of my projects have been built for internal use at my former
          workplace. Since these contain sensitive information, they are
          accessible only via authentication... That's why for each project I
          included a short video-demo showing its main features.
        </ExplanationParagraph>
      </FlexColumn>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((proj, index) => {
          return (
            <ProjectCard
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

export default ProjectsSection
