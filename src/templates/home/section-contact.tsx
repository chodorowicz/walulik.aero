import React from "react"
import styled from "@emotion/styled"

import { SectionTitle, WrapperContent } from "../../components"
import { ContactForm } from "./contact-form/contact-form"
import { colors, fontSizes, fontFamily, fontWeight, spacings } from "../../constants"
import { grid12 } from "../../styles"

const Wrapper = styled.div`
  padding-top: 111px;
  padding-bottom: 134px;
  ${grid12};
`

const InfoSide = styled.div`
  grid-column: 2 / 7;
  padding-top: ${spacings.space50}px;
  padding-bottom: 134px;
`

const ContactFormWrapperSC = styled.div`
  grid-column: 7 / 13;
  background-color: ${colors.darkBlue};
`

const ContactFormWrapperInnerSC = styled.div`
  grid-area: 1 / 8 / 1 / 12;
  background-color: ${colors.darkBlue};
`

const InfoSideTitle = styled.h2`
  font-size: ${fontSizes.largePlus}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  color: ${colors.darkBlue};
`;

const InfoSideDetails = styled.div`
  font-size: ${fontSizes.size18}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.light};
  color: ${colors.darkBlue};
  line-height: 30px;
`;

const Link = styled.a`
  color: ${colors.accent};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.medium}px;
`;

export const SectionContact: React.FC<any> = () => {
  return (
    <WrapperContent>
      <Wrapper>
        <InfoSide>
          <SectionTitle>Contact</SectionTitle>
          <InfoSideTitle>
            Jan Walulik<br />
            Aviation Research &amp; Consulting
          </InfoSideTitle>
          <InfoSideDetails>
            50/515 Nowogrodzka St.<br />
            Warsaw, PL00-695 <br />
            Poland<br />
            jan@walulik.aero<br />
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
    </WrapperContent>
  )
}
