import * as React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily, spacings } from "../../../constants"
import { Button, ButtonInner } from "../../../components"
import Line from "../../../images/line.inline.svg"

const Container = styled.div`
  padding: 50px 100px;
  color: ${colors.white};
`

const Title = styled.h3`
  font-size: ${fontSizes.size28}px;
  font-family: ${fontFamily.roboto};
  margin-top: 0;
`

const SectionSC = styled.div`
  margin-bottom: ${spacings.space40}px;
`

const LabelSC = styled.label`
  font-size: ${fontSizes.size18}px;
`

const InputSC = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.white};
  display: block;
  color: ${colors.white};
  font-size: ${fontSizes.size28}px;
  width: 100%;
`

const TextareaSC = styled.textarea`
  display: block;
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.size28}px;
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
        }}
      >
        <SectionSC>
          <LabelSC>name</LabelSC>
          <InputSC
            value={name}
            onChange={event => {
              setName(event.currentTarget.value)
            }}
          />
        </SectionSC>
        <SectionSC>
          <LabelSC>e-mail</LabelSC>
          <InputSC
            value={email}
            onChange={event => {
              setEmail(event.currentTarget.value)
            }}
          />
        </SectionSC>
        <LabelSC>message</LabelSC>
        <TextareaSC
          onChange={event => {
            setMessage(event.currentTarget.value)
          }}
        >
          {message}
        </TextareaSC>
        <ButtonSectionSC>
          <Button>
            <ButtonInner>Send</ButtonInner>
            <Line />
          </Button>
        </ButtonSectionSC>
      </form>
    </Container>
  )
}
