import * as React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontWeight, fontFamily } from "../constants"
import LogoCars from "../images/logos/cars.svg"

const Container = styled.footer`
  display: grid;
  padding-left: 114px;
  padding-right: 114px;
  padding-top: 53px;
  padding-bottom: 24px;
  grid-template-columns: repeat(4, 25%);
  grid-template-areas:
    "left left . right"
    "c c . d";
  grid-row-gap: 60px;
  background-color: ${colors.white};
  color: ${colors.darkBlue};
  font-size: ${fontSizes.size15}px;
`

const ContainerLeft = styled.div`
  grid-area: left;
`

const ContainerRight = styled.div`
  grid-area: right;
`

const CopySection = styled.div`
  grid-area: c;
`

const LinksSection = styled.div`
  grid-area: d;
`

const Title = styled.h3`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.roboto};
`

const Logos = styled.div`
  display: flex;
`

const ContactInfo = styled.div``
const Text = styled.div`
  font-family: ${fontFamily.roboto};
`
const EmailLink = styled.a`
  color: ${colors.accent};
`
const StandardLink = styled.a`
  font-family: ${fontFamily.roboto};
  color: ${colors.darkBlue};
`

export function Footer(): JSX.Element {
  return (
    <Container>
      <ContainerLeft>
        <Title>Find Jan at:</Title>
        <Logos>
          <LogoCars />
        </Logos>
      </ContainerLeft>
      <ContainerRight>
        <ContactInfo>
          <Title>
            ContactInfoJan Walulik <br />
            Aviation Research &amp; Consulting
          </Title>
          <Text>
            50/515 Nowogrodzka
            <br />
            St. Warsaw, PL00-695
            <br />
            Poland
          </Text>
          <br />
          <EmailLink href="jan@walulik.aero">jan@walulik.aero</EmailLink>
        </ContactInfo>
      </ContainerRight>
      <CopySection>&copy; {new Date().getFullYear()} walulik.aero  |  All rights reserved  |  Designed by Furyarts</CopySection>
      <LinksSection>
        <StandardLink href="#">Privacy Policy</StandardLink> |{" "}
        <StandardLink href="#">Cookies</StandardLink>
      </LinksSection>
    </Container>
  )
}
