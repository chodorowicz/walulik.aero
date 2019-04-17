import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants"
import { PageCallout, Title, Paragraph, WrapperContent } from "../../components"
import { Book } from "./book"
import BookBrexit from "../../images/books/brexit_bok@2x.png"

const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`

const StyledPageCallout = styled(PageCallout)`
  margin-top: -220px;
  position: relative;
  z-index: 1;
`

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & > * {
    min-width: 0;
  }
`

export const SectionBooks: React.FC = () => (
  <Wrapper>
    <WrapperContent>
      <StyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>
          Books
        </Title>
        <Paragraph color={colors.white}>
          Jan is an author of several monographs on air transport law in English
          and Polish as well as a co-author and editor to book projects
          featuring world’s most renowned aviation experts. He is also a winner
          of a prestigious academic book award in Poland.
        </Paragraph>
      </StyledPageCallout>
      <BooksWrapper>
        <Book source={BookBrexit} title="Brexit and Aviation Law" publisher="Publisher: Routledge"/>
        <Book source={BookBrexit} title="" publisher="" />
        <Book source={BookBrexit} title="" publisher="" />
      </BooksWrapper>
    </WrapperContent>
  </Wrapper>
)
