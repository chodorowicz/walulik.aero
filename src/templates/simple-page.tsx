import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"

import { Layout } from "../layout"
import { spacings } from "../constants"
import { gradient, grid12, minHeightContent } from "../styles"
import { SectionTopShort, WrapperContent, StyledContent } from "../components"

const PageWrapper = styled.div`
  ${gradient};
  ${minHeightContent};
`

const WrapperContentInnerSC = styled(WrapperContent)`
  ${grid12};
`

const StyledContentSC = styled(StyledContent)`
  grid-column: 2 / span 10;
  padding-bottom: ${spacings.space80}px;
`

const theme = {
  lightMenu: true,
}

const SimplePage: React.FC = props => {
  const { data } = props
  const { html } = data.markdownRemark

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PageWrapper>
          <WrapperContent>
            <SectionTopShort />
            <WrapperContentInnerSC>
              <StyledContentSC dangerouslySetInnerHTML={{ __html: html }} />
            </WrapperContentInnerSC>
          </WrapperContent>
        </PageWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default SimplePage

export const pageQuery = graphql`
  query SimplePage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
    }
  }
`
