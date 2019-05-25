import React from "react"
import styled from "@emotion/styled"

import { colors, spacings, mq } from "../../constants"
import {
  ResponsiveStyledPageCallout,
  Title,
  WrapperContent,
  WrapperContentNoMobilePadding,
  StyledCalloutContent,
  MarkdownContainer,
} from "../../components"
import { Book } from "./book"
import { IBook } from "MyTypes"
import { grid12 } from "../../styles"

const Wrapper = styled.div`
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${grid12}
  grid-gap: ${spacings.gridGap16}px;
  padding-left: ${spacings.space1of12}%;
  padding-right: ${spacings.space1of12}%;
  padding-bottom: 40px;
  padding-top: 40px;
  & > * {
    padding-top: 0;
    padding-bottom: 0;
    min-width: 0;
  }
`

const BookSC = styled(Book)`
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: span 4;
  }
`

interface IProps {
  books: IBook[]
  text: string
  title: string
}

export const SectionBooks: React.FC<IProps> = ({ books, text, title }) => (
  <Wrapper>
    <WrapperContentNoMobilePadding>
      <ResponsiveStyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>
          {title}
        </Title>
        <StyledCalloutContent>
          <MarkdownContainer content={text} />
        </StyledCalloutContent>
      </ResponsiveStyledPageCallout>
      <BooksWrapper>
        {books.map(book => (
          <BookSC
            source={book.node.frontmatter.image.childImageSharp.fluid.src}
            title={book.node.frontmatter.title}
            publisher={book.node.frontmatter.publisher}
            url={book.node.fields.slug}
            extraBadge={book.node.frontmatter.extraBadge}
          />
        ))}
      </BooksWrapper>
    </WrapperContentNoMobilePadding>
  </Wrapper>
)
