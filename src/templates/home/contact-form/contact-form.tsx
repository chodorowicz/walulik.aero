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

const Success = styled.div<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: 300ms all;
  position: absolute;
  bottom: -45px;
  left: 0;
  right: 0;
  text-align: center;
`

export const ContactForm: React.FC = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [pot, setPot] = React.useState("")
  const [wasFormSent, setWasFormSent] = React.useState(false)
  return (
    <Container>
      <Title>Send a message</Title>
      <form
        style={{ position: "relative"}}
        onSubmit={event => {
          event.preventDefault()
          window.fetch(
              "/.netlify/functions/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  message,
                  pot,
                }),
              }
            ).then((response) => {
              console.log(response);
              setWasFormSent(true)
              window.setTimeout(() => {
                setWasFormSent(false)
                setName("")
                setEmail("")
                setMessage("")
              }, 4000)
              if(response.status !== 200) {
                console.log("problem sending");
              }
            }).catch(error => {
              console.log("problem sending", error);
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
          <LabelSC htmlFor="name">name</LabelSC>
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
          <LabelSC htmlFor="email">e-mail</LabelSC>
        </SectionSC>
        <div style={{ opacity: 0, height: "1px", width: "1px" }}>
          <input
            id="pot"
            value={pot}
            tabindex="-1"
            onChange={event => {
              setPot(event.currentTarget.value)
            }}
          />
        </div>
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
          <LabelSC htmlFor="message">message</LabelSC>
        </SectionSC>
        <ButtonSectionSC>
          <AnimatedButtonRight>Send</AnimatedButtonRight>
        </ButtonSectionSC>
        <Success isVisible={wasFormSent}>Thanks for sending Your message!</Success>
      </form>
    </Container>
  )
}
