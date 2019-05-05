import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants"
import {
  PageCallout,
  Title,
  WrapperContent,
  StyledCalloutContent,
  MarkdownContainer,
} from "../../components"
import { Book } from "./book"
import { IBook } from "MyTypes"

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

interface IProps {
  books: IBook[]
  text: string
  title: string
}

export const SectionBooks: React.FC<IProps> = ({ books, text, title }) => (
  <Wrapper>
    <WrapperContent>
      <StyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>
          {title}
        </Title>
        <StyledCalloutContent>
          <MarkdownContainer content={text} />
        </StyledCalloutContent>
      </StyledPageCallout>
      <BooksWrapper>
        {books.map(book => (
          <Book
            source={book.node.frontmatter.image.childImageSharp.fluid.src}
            title={book.node.frontmatter.title}
            publisher={book.node.frontmatter.publisher}
            url={book.node.fields.slug}
          />
        ))}
      </BooksWrapper>
    </WrapperContent>
  </Wrapper>
)
