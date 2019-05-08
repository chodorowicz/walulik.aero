import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants"
import { PageCallout, StyledCalloutContent, Title, WrapperContent, MarkdownContainer } from "../../components"
import { PapersList } from "./papers-list";

interface IProps {
  html: string;
  title: string;
  categories: string[];
  researchPapers: any;
}

const Wrapper = styled.div`
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`

const StyledPageCallout = styled(PageCallout)`
  margin-top: -220px;
  position: relative;
  z-index: 1;
`

export const SectionResearchPapers: React.FC<IProps> = ({ html, title, categories, researchPapers }) => (
  <Wrapper>
    <WrapperContent>
      <StyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>
          {title}
        </Title>
        <StyledCalloutContent>
          <MarkdownContainer content={html} />
        </StyledCalloutContent>
      </StyledPageCallout>
      <PapersList categories={categories} researchPapers={researchPapers} />
    </WrapperContent>
  </Wrapper>
)
