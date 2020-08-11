import React from "react"
import styled from "styled-components"
import SectionTitle from "./UIComponents/SectionTitle"
import constants from "../constants/constants"
import Footer from "./Footer"
import Form from "./Form"
import ContactDetails from "./ContactDetails"
import ModalEmail from "./ModalEmail"
import { useModal } from "../constants/hooks"

const Container = styled.div`
  background-color: ${props => props.theme.contactsStrip};
  padding: 5rem 0 1rem 0;
  padding-right: ${constants.padding.left};
  padding-left: ${constants.padding.right};
  display: flex;
  flex-direction: column;

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: ${constants.padding.paddingResponsive};
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: column;
  }
`

const TitleWrapper = styled.div`
  display: inline-flex;

  @media (max-width: ${constants.breakPoints.medium}) {
    align-self: center;
    justify-content: center;
    font-size: 1.5rem;
  }
`

const ContactsSection = () => {
  const { isModalOpen, handleModal } = useModal()

  return (
    <Container id="contactsSection">
      {isModalOpen && <ModalEmail handleModal={handleModal} />}
      <TitleWrapper
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease"
      >
        <SectionTitle title="Get in touch!" />
      </TitleWrapper>
      <ContentWrapper>
        <Form handleModal={handleModal} />
        <ContactDetails />
      </ContentWrapper>
      <Footer />
    </Container>
  )
}

export default ContactsSection
