import React from "react"
import styled from "@emotion/styled"
import slugify from "@sindresorhus/slugify"
import { Link } from "gatsby"

import { Title, Paragraph, WrapperContent } from "../../components"
import { colors, spacings, urls } from "../../constants"
import { PaperBox } from "./paper-box"
import EconomicRegulation from "../../images/icon-economic.inline.svg"
import IconAirlineFinance from "../../images/icon-airline-finance.svg"
import IconSecurity from "../../images/icon-security.svg"
import IconCriminalLaw from "../../images/icon-criminal-law.svg"
import { grid12 } from "../../styles"

const Wrapper = styled.div`
  padding-top: 98px;
  padding-bottom: 134px;
  background-color: ${colors.grey};
`
const SectionGridSC = styled.div`
  ${grid12};
`

const WrapperText = styled.div`
  grid-column: 2 / span 10;
`


const BoxWrapper = styled.div`
  margin-top: ${spacings.space80}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  height: 380px;
  grid-column: 1 / span 12;
`

const PaperBoxSC = styled(PaperBox)`
  height: 100%;
`

const LinkSC = styled(Link)`
  display: block;
`

const LinkedPaperBox: React.FC<{ section: string }> = ({
  children,
  section,
}) => {
  return (
    <LinkSC to={`/${urls.researchPapers}?section=${slugify(section)}`}>
      <PaperBoxSC text={section}>
        {children}
      </PaperBoxSC>
    </LinkSC>
  )
}

export const SectionPapers: React.FC<any> = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <SectionGridSC>
        <WrapperText>
          <Title>Research papers</Title>
          <Paragraph>
            Jan’s publications include many specialist research papers focused
            on key issues in aviation law and policy as well as on market
            regulation and fair competition matters.
          </Paragraph>
        </WrapperText>
        <BoxWrapper>
          <LinkedPaperBox section="Economic regulation">
            <EconomicRegulation />
          </LinkedPaperBox>
          <LinkedPaperBox section="Airline finance">
          <IconAirlineFinance />
          </LinkedPaperBox>
          <LinkedPaperBox section="Safety and security">
            <IconSecurity />
          </LinkedPaperBox>
          <LinkedPaperBox section="Aviation criminal law">
            <IconCriminalLaw />
          </LinkedPaperBox>
        </BoxWrapper>
        </SectionGridSC>
      </WrapperContent>
    </Wrapper>
  )
}
