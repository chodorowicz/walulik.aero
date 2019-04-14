import React from "react"
import styled from "@emotion/styled"

import { Button, ButtonInner, Title, Paragraph } from "../../components"
import Line from "../../images/line.inline.svg"
import { colors, fontSizes } from "../../constants"
import { PaperBox } from "./paper-box";
import EconomicRegulation from "../../images/icon-economic.inline.svg";

const Wrapper = styled.div`
  padding-top: 98px;
  padding-bottom: 98px;
  padding-left: 114px;
  padding-right: 114px;
  background-color: ${colors.grey};
`

const WrapperText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  height: 300px;
`;

export const SectionPapers: React.FC<any> = () => {
  return (
    <Wrapper>
      <WrapperText>
        <Title>Research papers</Title>
        <Paragraph>Jan’s publications include many specialist research papers focused on key issues in aviation law and policy as well as on market regulation and fair competition matters.</Paragraph>
      </WrapperText>
      <BoxWrapper>
        <PaperBox text="Economic regulation"><EconomicRegulation /></PaperBox>
        <PaperBox text="Economic regulation" />
        <PaperBox text="Economic regulation" />
        <PaperBox text="Economic regulation" />
      </BoxWrapper>
    </Wrapper>
  )
}
