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
import LogoP from "../images/logos/p.svg"
import LogoRoutledge from "../images/logos/routledge.svg"
import LogoScopus from "../images/logos/scopus.svg"
import LogoLinkedin from "../images/logos/linkedin.svg"
import LogoOrcid from "../images/logos/orcid.svg"
import LogoAcademia from "../images/logos/academia.svg"
import LogoBlob from "../images/logos/blob.svg"
import LogoSSRN from "../images/logos/ssrn.svg"
import LogoResearchgate from "../images/logos/researchgate.svg"
import LogoPBN from "../images/logos/pbn.svg"
import LogoGoogleScholarSrc from "../images/logos/google-scholar.png"
import LogoNaukaPolska from "../images/logos/nauka-polska.png"
import { grid12 } from "../styles"
import { urls } from "../constants"
import Obfuscate from "react-obfuscate";

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
  flex-wrap: wrap;
  align-items: center;
  svg, img {
    margin-bottom: 30px;
  }
  a:not(:last-child) {
    svg, img { 
      margin-right: 30px;
    }
  }
`

const ContactInfo = styled.div`
  a {
    color: ${colors.accent};
  }
`
const Text = styled.div`
  font-family: ${fontFamily.roboto};
`

const StandardLink = styled.a`
  font-family: ${fontFamily.roboto};
  color: ${colors.darkBlue};
`

const FooterLink: React.FC<{ href: string }> = ({ href, children }) => {
  return <a href={href} target="_blank">{children}</a>;
}

export function Footer(): JSX.Element {
  return (
    <WrapperOuterSC>
    <WrapperContent>
      <Container>
        <ContainerLeft>
          <Title>Find Jan at:</Title>
          <Logos>
            <FooterLink href="https://www.cars.wz.uw.edu.pl/laboratories-02.html"><LogoCars /></FooterLink>
            <FooterLink href="https://publons.com/researcher/1694797/jan-walulik/"><LogoP /></FooterLink>
            <FooterLink href="https://www.routledge.com/authors/i15817-jan-walulik"><LogoRoutledge /></FooterLink>
            <FooterLink href="https://www.scopus.com/authid/detail.uri?authorId=57189370786 "><LogoScopus /></FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jan-walulik-aviation-research-and-consulting/ "><LogoLinkedin /></FooterLink>
            <FooterLink href="https://scholar.google.com/citations?user=TXVA74kAAAAJ&hl=en"><img src={LogoGoogleScholarSrc} width={60} /></FooterLink>
            <FooterLink href="https://orcid.org/0000-0001-9995-7774"><LogoOrcid /></FooterLink>
            <FooterLink href="https://uw.academia.edu/JanWalulik"><LogoAcademia /></FooterLink>
            <FooterLink href="https://www.mendeley.com/profiles/jan-walulik/ "><LogoBlob /></FooterLink>
            <FooterLink href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3377597"><LogoSSRN /></FooterLink>
            <FooterLink href="https://www.researchgate.net/profile/Jan_Walulik"><LogoResearchgate /></FooterLink>
            <FooterLink href="https://nauka-polska.pl/#/profile/scientist?id=238924&lang=en&_k=3l9r8c"><img src={LogoNaukaPolska} width={70} /></FooterLink>
            <FooterLink href="https://pbn.nauka.gov.pl/sedno-webapp/persons/3949073/"><LogoPBN /></FooterLink>
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
            <Obfuscate
              style={{display:'inline-block'}}
              email="jan@walulik.aero"
            />
          </ContactInfo>
        </ContainerRight>
        <CopySection>
          &copy; {new Date().getFullYear()} walulik.aero | All rights reserved |
          Designed by <StandardLink href="http://www.furyarts.pl/" target="_blank">Furyarts</StandardLink> &amp; <StandardLink href="https://www.chodorowicz.com/" target="_blank">chodorowicz</StandardLink>
        </CopySection>
        <LinksSection>
          <StandardLink href={urls.privacyPolicy}>Privacy Policy</StandardLink>
        </LinksSection>
      </Container>
    </WrapperContent>
    </WrapperOuterSC>
  )
}
