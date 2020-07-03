import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle";
import constants from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

const Container = styled.div`
  background-color: ${props => props.theme.contactsStrip};
  padding: 5rem 0 1rem 0;
  padding-right: ${constants.padding.left};
  padding-left: ${constants.padding.right};
  display: flex;
  flex-direction: column;

  @media (max-width: ${constants.breakPoints.medium}) {
    padding: ${constants.padding.paddingResponsive};
    /* padding: 3rem 0 4rem 0; */
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
  min-width: 400px;
  margin-top: 1.7rem;
  margin-right: 2rem;

  @media (max-width: ${constants.breakPoints.medium}) {
    width: 75vw;
    min-width: 75vw;
    margin-right: 0;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 300;
  font-size: 0.8rem;
  color: ${props => props.theme.secondaryDetails};

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1rem;
  }
`

const Input = styled.input`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.body};
  border-radius: 0;
  border: none;
  color: ${props => props.theme.text};

  &:focus {
    outline: none;
    border-bottom: ${props => `2px solid ${props.theme.highlights}`};
  }
` 

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.body};
  border: none;
  border-radius: none;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: ${props => `2px solid ${props.theme.highlights}`};
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.highlights};
  color: ${props => props.theme.contactsButtonColor};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.6rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;
  opacity: 0.7;
  border: none;

  &:hover {
    opacity: 1;
    transform: translateY(5px);
  }

  @media (max-width: ${constants.breakPoints.medium}) {
    font-size: 1.2rem;
  }
`

const LinksIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 350px;
  padding: 0 1.5rem;
  margin: 3rem 0;
  flex-direction: column;
  border-right: 3px solid ${props => props.theme.highlights};

  @media (max-width: ${constants.breakPoints.medium}) {
    flex-direction: row;
    border: none;
    justify-content: space-around;
  }
`

const LinkIconText = styled.h5`
  font-family: "Proxima Nova";
  font-size: 0.7rem;
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  opacity: ${props => (props.isTextShowing ? 1 : 0)};
  overflow: hidden;
  white-space: nowrap;
  transition: all 1s ease;
  padding-right: 1rem;
  padding-left: 10px;
  border-left: 2px solid;

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

const ContactDetail = ({icon, text, link}) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  return (
    <a href={link} target="_blank">
      <ContactDetailContainer
        onMouseEnter={() => setIsTextShowing(true)}
        onMouseLeave={() => setIsTextShowing(false)}
      >
        <LinkIconText isTextShowing={isTextShowing}>{text}</LinkIconText>
        <FontAwesomeIcon
          icon={icon}
          style={{
            marginLeft: ".9rem",
            opacity: isTextShowing ? 0.8 : 0.4,
            transition: "all 1s ease",
            marginLeft: icon === "file-pdf" ? 5 : 0,
          }}
        />
      </ContactDetailContainer>
    </a>
  )  
}

const ContactsSection = () => {
  const [formState, setFormState] = useState({
    name: "", 
    email: "", 
    message: ""
  });

  const handleChange = e => {
    setFormState({
      ...formState, 
      [e.target.name]: e.target.value
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
 
  }

  return (
    <Container id="contactsSection">
      <SectionTitle title="Get in touch!" />
      <ContentWrapper
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <Form
          name="contact"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              value={formState.name}
              onChange={handleChange}
              name="name"
              id="name"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value={formState.email}
              onChange={handleChange}
              name="email"
              id="email"
              required
            />
          </InputContainer>
          <Label htmlFor="message">Message</Label>
          <TextArea
            type="text"
            rows={6}
            value={formState.message}
            onChange={handleChange}
            name="message"
            id="message"
            required
          />
          <Button type="submit">SEND!</Button>
        </Form>

        <LinksIcons>
          <ContactDetail
            icon="envelope"
            text="Send me an e-mail"
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
          <ContactDetail icon={"file-pdf"} text="Download my CV" link="/" />
        </LinksIcons>
      </ContentWrapper>
      <Footer />
    </Container>
  )
}

export default ContactsSection;


