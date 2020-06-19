import React from "react";
import styled from "styled-components";
import SectionTitle from "./UIComponents/SectionTitle";
import constants from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: ${props => props.theme.contactsStrip};
  padding: 5rem 0;
  padding-right: ${constants.padding.left};
  padding-left: ${constants.padding.right};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-top: 1.7rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 300;
  font-size: .8rem;
  color: ${props => props.theme.secondaryDetails};
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

  &:active {
    outline: ${props => `2px solid ${props.theme.highlights}`};
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

  &:active {
    outline: none;
    border-bottom: ${props => `2px solid ${props.theme.highlights}`};
  }
`

const Button = styled.div`
  background-color: ${props => props.theme.highlights};
  color: ${props => props.theme.contactsButtonColor};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.6rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3.5rem;
  border-right: ${props => "2px solid " + props.theme.highlights};
`

const ContactDetail = ({icon, text}) => {
  return (
    <div style={{display: "flex", alignItems: "center", paddingBottom: ".6rem", fontSize: ".9rem"}}>
      <FontAwesomeIcon icon={icon} style={{marginRight: ".9rem", opacity: .4}} />     
      {text}
    </div>  
  )  
}

const ContactsSection = () => {
  return (
    <Container id="contactsSection">
      <SectionTitle title="Get in touch!" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form>
          <InputContainer>
            <Label>Name</Label>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input type="text" />
          </InputContainer>
          <Label>Message</Label>
          <TextArea type="text" rows={6} />
          <Button>SEND!</Button>
        </Form>

        <Paragraph>
          <ContactDetail icon="envelope" text="andrea.scorcia@gmail.com" />
          <ContactDetail icon={["fab", "linkedin"]} text="linkedIn" />
          <ContactDetail icon={["fab", "github"]} text="github link" />
          <ContactDetail icon={"briefcase"} text="Download my CV" />
        </Paragraph>
      </div>
    </Container>
  )
}

export default ContactsSection;


