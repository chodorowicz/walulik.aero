import React from "react"
import styled from "@emotion/styled"

import { SectionTitle, WrapperContentNoMobilePadding } from "../../components"
import { ContactForm } from "./contact-form/contact-form"
import { colors, fontSizes, fontFamily, fontWeight, spacings, mq } from "../../constants"
import { grid12, paddingSides20, paddingSides0 } from "../../styles"
import Obfuscate from "react-obfuscate";

const Wrapper = styled.div`
  ${grid12};
  ${mq.b768} {
    padding-top: 111px;
    padding-bottom: 134px;
  }
`

const InfoSide = styled.div`
  padding-top: ${spacings.space50}px;
  padding-bottom: 134px;
  ${paddingSides20};

  grid-column: 1 / span 12;
  ${mq.b768} {
    ${paddingSides0};
    grid-column: 2 / 7;
  };
`

const ContactFormWrapperSC = styled.div`
  background-color: ${colors.darkBlue};
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: 7 / 13;
  };
`

const ContactFormWrapperInnerSC = styled.div`
  grid-area: 1 / 8 / 1 / 12;
  background-color: ${colors.darkBlue};
`

const InfoSideTitle = styled.h3`
  font-size: ${fontSizes.largePlus}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  color: ${colors.darkBlue};
  ${mq.b768} {
    margin-top: ${spacings.space100}px;
  }
`;

const InfoSideDetails = styled.div`
  font-size: ${fontSizes.size18}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.light};
  color: ${colors.darkBlue};
  line-height: 30px;
  a {
    color: ${colors.darkBlue};
  }
`;

const Link = styled.a`
  color: ${colors.accent};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.medium}px;
`;

const SectionTitleSC = styled(SectionTitle)`
  padding-top: 80px; 
  margin-top: -80px;
`

export const SectionContact: React.FC<any> = () => {
  return (
    <WrapperContentNoMobilePadding>
      <Wrapper>
        <InfoSide>
          <SectionTitleSC name="contact">Contact</SectionTitleSC>
          <InfoSideTitle>
            Jan Walulik<br />
            Aviation Research &amp; Consulting
          </InfoSideTitle>
          <InfoSideDetails>
            50/515 Nowogrodzka St.<br />
            Warsaw, PL00-695 <br />
            Poland<br />
            <span><Obfuscate
              style={{display:'inline-block'}}
              email="jan@walulik.aero"
            /></span><br />
          </InfoSideDetails>
          <br />
          <Link href="https://walulik.aero">walulik.aero</Link>
        </InfoSide>
        <ContactFormWrapperSC>
          <ContactFormWrapperInnerSC>
            <ContactForm />
          </ContactFormWrapperInnerSC>
        </ContactFormWrapperSC>
      </Wrapper>
    </WrapperContentNoMobilePadding>
  )
}
