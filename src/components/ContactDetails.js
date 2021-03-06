import React, { useState } from "react"
import styled from "styled-components"
import constants from "../constants/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cv from "../files/Andrea_Scorcia_CV.pdf"

const LinksIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 350px;
  padding: 0 1.5rem;
  margin: 3rem 0;
  flex-direction: column;
  border-right: 7px solid ${props => props.theme.highlights};

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: row;
    border: none;
    justify-content: space-around;
  }
`

const LinkIconText = styled.h5`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 500;
  opacity: ${props => (props.isTextShowing ? 1 : 0)};
  overflow: hidden;
  white-space: nowrap;
  transition: all 1s ease;
  padding-right: 1rem;
  padding-left: 10px;
  border-left: 2px solid ${props => props.theme.highlights};
  padding-top: 5px;
  padding-bottom: 5px;

  @media (max-width: ${constants.breakPoints.medium}) {
    display: none;
  }
`

const ContactDetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.9rem;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1.4rem;
  }
`

const ContactDetail = ({ icon, text, link }) => {
  const [isTextShowing, setIsTextShowing] = useState(false)

  return (
    <a
      href={link}
      target={icon === "mobile-alt" ? "_self" : "_blank"}
      rel="noreferrer"
    >
      <ContactDetailContainer
        onMouseEnter={() => setIsTextShowing(true)}
        onMouseLeave={() => setIsTextShowing(false)}
        data-sal="slide-left"
        data-sal-delay="400"
        data-sal-easing="ease"
      >
        <LinkIconText isTextShowing={isTextShowing}>{text}</LinkIconText>
        <FontAwesomeIcon
          icon={icon}
          style={{
            opacity: isTextShowing ? 0.8 : 0.4,
            transition: "all 1s ease",
            marginRight: icon === "mobile-alt" ? 5 : 0,
          }}
        />
      </ContactDetailContainer>
    </a>
  )
}

const ContactDetails = () => {
  return (
    <LinksIcons>
      <ContactDetail
        icon="envelope"
        text="andrea.scorcia@gmail.com"
        link="mailto:andrea.scorcia@gmail.com"
      />
      <ContactDetail
        icon={["fab", "linkedin"]}
        text="My LinkedIn profile"
        link="https://www.linkedin.com/in/andrea-scorcia-1144931a5/"
      />
      <ContactDetail
        icon={["fab", "github"]}
        text="My Github repositories"
        link="https://github.com/AndSco?tab=repositories"
      />
      <ContactDetail
        icon={"mobile-alt"}
        text="+420 604 715 513"
        link="tel:+420604715513"
      />
    </LinksIcons>
  )
}

export default ContactDetails
