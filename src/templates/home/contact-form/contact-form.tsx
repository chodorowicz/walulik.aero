import * as React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily, spacings, mq } from "../../../constants"
import { AnimatedButtonRight } from "../../../components"
import { paddingSides20 } from "../../../styles"

const Container = styled.div`
  color: ${colors.white};
  padding-top: 50px;
  padding-bottom: 50px;
  ${paddingSides20};
  ${mq.b768} {
    padding-left: ${spacings.space60}px;
    padding-right: ${spacings.space60}px;
  }
`

const Title = styled.h3`
  font-size: ${fontSizes.size28}px;
  font-family: ${fontFamily.roboto};
  margin-top: 0;
  margin-bottom: ${spacings.space80}px;
`

const SectionSC = styled.div`
  position: relative;
  padding-top: 20px;
  margin-bottom: ${spacings.space40}px;
`

const LabelSC = styled.label`
  position: absolute;
  top: 20px;
  font-size: ${fontSizes.size18}px;
  transition: all 0.3s;
`

const InputSC = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.white};
  display: block;
  color: ${colors.white};
  font-size: ${fontSizes.size28}px;
  width: 100%;
  &:focus ~ label,
  &.notEmpty ~ label {
    top: 0px;
    font-size: ${fontSizes.size15}px;
  }
`

const TextareaSC = styled.textarea`
  display: block;
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.size28}px;
  &:focus ~ label,
  &.notEmpty ~ label {
    top: 0px;
    font-size: ${fontSizes.size15}px;
  }
`

const ButtonSectionSC = styled.div`
  margin-top: ${spacings.space80}px;
  display: flex;
  justify-content: center;
`

export const ContactForm: React.FC = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  return (
    <Container>
      <Title>Send a message</Title>
      <form
        onSubmit={event => {
          event.preventDefault()
          window.fetch("/.netlify/functions/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          })
        }}
      >
        <SectionSC>
          <InputSC
            id="name"
            value={name}
            onChange={event => {
              setName(event.currentTarget.value)
            }}
            required
            className={name !== "" && "notEmpty"}
          />
          <LabelSC for="name">name</LabelSC>
        </SectionSC>
        <SectionSC>
          <InputSC
            id="email"
            value={email}
            onChange={event => {
              setEmail(event.currentTarget.value)
            }}
            required
            type="email"
            className={email !== "" && "notEmpty"}
          />
          <LabelSC for="email">e-mail</LabelSC>
        </SectionSC>
        <SectionSC>
          <TextareaSC
            id="message"
            value={message}
            onChange={event => {
              setMessage(event.currentTarget.value)
            }}
            required
            className={message !== "" && "notEmpty"}
          />
          <LabelSC for="message">message</LabelSC>
        </SectionSC>
        <ButtonSectionSC>
          <AnimatedButtonRight>Send</AnimatedButtonRight>
        </ButtonSectionSC>
      </form>
    </Container>
  )
}
