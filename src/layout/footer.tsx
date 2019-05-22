import * as React from "react"
import styled from "@emotion/styled"

import { WrapperContent } from "../components"
import {
  colors,
  fontSizes,
  fontWeight,
  fontFamily,
  spacings,
  mq,
} from "../constants"
import LogoCars from "../images/logos/cars.svg"
import { grid12 } from "../styles"
import { urls } from "../constants"

const WrapperOuterSC = styled.div`
  background-color: ${colors.white};
`

const Container = styled.footer`
  display: grid;
  padding-top: ${spacings.space50}px;
  padding-bottom: 24px;
  grid-row-gap: 60px;
  color: ${colors.darkBlue};
  font-size: ${fontSizes.size15}px;
  ${grid12};
`

const ContainerLeft = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1;
  ${mq.b768} {
    grid-row: 1;
    grid-column: 1/7;
  }
`

const ContainerRight = styled.div`
  grid-column: 1 / span 12;
  grid-row: 2;
  ${mq.b768} {
    grid-row: 1;
    grid-column: 9/13;
  }
`

const CopySection = styled.div`
  grid-column: 1 / span 12;
  grid-row: 4;
  text-align: center;
  ${mq.b768} {
    text-align: unset;
    grid-row: 2;
    grid-column: 1/7;
  }
`

const LinksSection = styled.div`
  grid-column: 1 / span 12;
  grid-row: 3;
  ${mq.b768} {
    grid-row: 2;
    grid-column: 9/13;
  }
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
    <WrapperOuterSC>
    <WrapperContent>
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
              Jan Walulik <br />
              Aviation Research &amp; Consulting
            </Title>
            <Text>
              50/515 Nowogrodzka St.
              <br />
              Warsaw, PL00-695
              <br />
              Poland
            </Text>
            <br />
            <EmailLink href="jan@walulik.aero">jan@walulik.aero</EmailLink>
          </ContactInfo>
        </ContainerRight>
        <CopySection>
          &copy; {new Date().getFullYear()} walulik.aero | All rights reserved |
          Designed by Furyarts &amp; chodorowicz
        </CopySection>
        <LinksSection>
          <StandardLink href={urls.privacyPolicy}>Privacy Policy</StandardLink> |{" "}
          <StandardLink href="#">Cookies</StandardLink>
        </LinksSection>
      </Container>
    </WrapperContent>
    </WrapperOuterSC>
  )
}
