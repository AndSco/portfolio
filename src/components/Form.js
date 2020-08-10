import React, { useState } from "react"
import styled from "styled-components"
import constants from "../constants/constants"

const StyledForm = styled.form`
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

const Form = ({ handleModal }) => {
  const startingFormState = {
    name: "",
    email: "",
    message: "",
  }

  const [formState, setFormState] = useState(startingFormState)

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => {
        handleModal()
        setFormState(startingFormState)
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <StyledForm
      name="contact"
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-sal="slide-up"
      data-sal-delay="400"
      data-sal-easing="ease"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
        aria-label="email-form-submitter"
      />
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
    </StyledForm>
  )
}

export default Form
