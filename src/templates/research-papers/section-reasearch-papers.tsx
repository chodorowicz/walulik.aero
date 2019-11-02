import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants"
import {
  ResponsiveStyledPageCallout,
  StyledCalloutContent,
  Title,
  MarkdownContainer,
  WrapperContentNoMobilePadding,
} from "../../components"
import { PapersList } from "./papers-list"

interface IProps {
  html: string
  title: string
  categories: string[]
  researchPapers: any
}

const Wrapper = styled.div`
  /* when height of section change there's an effect as if background was changing
      when toggling between sections, let's make this background constant */
  /* background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4); */
  background-color: #f4f4f4;
`

export const SectionResearchPapers: React.FC<IProps> = ({
  html,
  title,
  categories,
  researchPapers,
}) => (
  <Wrapper>
    <WrapperContentNoMobilePadding>
      <ResponsiveStyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }} name="list">
          {title}
        </Title>
        <StyledCalloutContent>
          <MarkdownContainer content={html} />
        </StyledCalloutContent>
      </ResponsiveStyledPageCallout>
      <PapersList categories={categories} researchPapers={researchPapers} />
    </WrapperContentNoMobilePadding>
  </Wrapper>
)
