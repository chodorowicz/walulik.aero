import React from "react"
import styled from "@emotion/styled"

import { SectionTitle } from "../../components"
import { ContactForm } from "./contact-form/contact-form";
import Line from "../../images/line.inline.svg"
import { colors, fontSizes, fontFamily, fontWeight } from "../../constants"
import { PaperBox } from "./paper-box";
import EconomicRegulation from "../../images/icon-economic.inline.svg";
import IconAirlineFinance from "../../images/icon-airline-finance.svg";
import IconSecurity from "../../images/icon-security.svg";
import IconCriminalLaw from "../../images/icon-criminal-law.svg";

const Wrapper = styled.div`
  padding-top: 111px;
  padding-bottom: 134px;
  padding-left: 114px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const InfoSide = styled.div`
  padding-top: 111px;
  padding-bottom: 134px;
  padding-left: 114px;
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

const WrapperText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  height: 380px;
`;

export const SectionContact: React.FC<any> = () => {
  return (
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
      <ContactForm />
    </Wrapper>
  )
}
