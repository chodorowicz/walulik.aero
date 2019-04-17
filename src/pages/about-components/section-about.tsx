import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants";
import { PageCallout, Title, Paragraph, WrapperContent } from "../../components";
import ImageAbout1 from "../../images/about-1@2x.jpg"
import ImageAbout2 from "../../images/about-2@2x.jpg"
import LogoCarsWzuw from "../../images/about/logo-cars-wzuw@2x.png";

const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`;

const StyledPageCallout = styled(PageCallout)`
  margin-top: -220px;
  position: relative;
  z-index: 1;
`;

const StyledWrapperContent = styled(WrapperContent)`
  padding-top: 165px;
  padding-bottom: 130px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const ImagesColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 70px;
`;

const TextColumn = styled.div`
  position: relative;
`;

const StyledTitleText = styled(Title)`
  display: inline-block;
  padding-bottom: 36px;
  border-bottom: 7px solid ${colors.darkBlue};
`;

const StyledParagraphText = styled(Paragraph)`
  margin-bottom: 108px;
`;


export const SectionAbout: React.FC = () => (
  <Wrapper>
    <WrapperContent>
      <StyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>About</Title>
        <Paragraph color={colors.white}>Jan has been specialising in aviation law and policy and in corporate law for over 10 years. He started his legal career at Weil in a commercial law department. Since 2008 he has been practicing individually as a business lawyer specialising in commercial law, aviation law, administrative law and tax law. Jan has successfully led numerous corporate restructuring projects, and has been active as an aviation expert in consulting and training projects for the industry and the government. He is a member of the Warsaw Bar Association.</Paragraph>
      </StyledPageCallout>
    </WrapperContent>
    <StyledWrapperContent>
      <ImagesColumn>
        <img src={ImageAbout1} />
        <img src={ImageAbout2} />
      </ImagesColumn>
      <TextColumn>
        <StyledTitleText>Research &amp; teaching</StyledTitleText>
        <StyledParagraphText>Jan has also been a lecturer in air law at the Warsaw School of Economics since 2012 and was an assistant professor at the Centre for Antitrust and Regulatory Studies, Faculty of Management, University of Warsaw, where he has headed the Civil Aviation Laboratory since 2016. He is also a tutor at Polish National School of Public Administration.</StyledParagraphText>
        <img src={LogoCarsWzuw} />
      </TextColumn>
    </StyledWrapperContent>
  </Wrapper>
)