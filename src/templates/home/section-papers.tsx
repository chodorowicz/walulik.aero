import React from "react"
import styled from "@emotion/styled"

import { Title, Paragraph, WrapperContent } from "../../components"
import { colors, spacings } from "../../constants"
import { PaperBox } from "./paper-box"
import EconomicRegulation from "../../images/icon-economic.inline.svg"
import IconAirlineFinance from "../../images/icon-airline-finance.svg"
import IconSecurity from "../../images/icon-security.svg"
import IconCriminalLaw from "../../images/icon-criminal-law.svg"

const Wrapper = styled.div`
  padding-top: 98px;
  padding-bottom: 134px;
  background-color: ${colors.grey};
`

const WrapperText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`

const BoxWrapper = styled.div`
  margin-top: ${spacings.space80}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  height: 380px;
`

export const SectionPapers: React.FC<any> = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperText>
          <Title>Research papers</Title>
          <Paragraph>
            Jan’s publications include many specialist research papers focused
            on key issues in aviation law and policy as well as on market
            regulation and fair competition matters.
          </Paragraph>
        </WrapperText>
        <BoxWrapper>
          <PaperBox text="Economic regulation">
            <EconomicRegulation />
          </PaperBox>
          <PaperBox text="Airline finance">
            <IconAirlineFinance />
          </PaperBox>
          <PaperBox text="Safety and security">
            <IconSecurity />
          </PaperBox>
          <PaperBox text="Aviation criminal law">
            <IconCriminalLaw />
          </PaperBox>
        </BoxWrapper>
      </WrapperContent>
    </Wrapper>
  )
}
