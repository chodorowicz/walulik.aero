import styled from "@emotion/styled"
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { CarouselCounter } from "./carousel-counter";
import { CarouselArrows } from "./carousel-arrows";

export function modulo(mod: number): (n: number) => number {
  return (n: number) => ((n % mod) + mod) % mod;
}

const books = [{
  image: "",
  link: "",
}, {
  image: "",
  link: "",
}];

const CarouselMain = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouselArrowsContainer = styled.div`
  margin-bottom: 70px;
`;

const Books = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
`; 

const BookContainer = styled.div`
  height: 400px;
  width: 300px;
  &:not(:first-child) {
    margin-left: -40px;
  }
`; 

export const Carousel: React.FC = () => {
  const [page, setPage] = useState(0);
  const numberOfPages = 2;
  const modNumberOfPages = modulo(numberOfPages);
  const nextPage = () => setPage(modNumberOfPages(page + 1));
  const prevPage = () => setPage(modNumberOfPages(page - 1));
  const data = useStaticQuery(graphql`
    query BooksQuery {
      file(relativePath: { eq: "content-brexit-book.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
  <div>
    <CarouselMain>
      <div>
        <CarouselArrowsContainer>
          <CarouselArrows next={nextPage} prev={prevPage} />
        </CarouselArrowsContainer>
        <CarouselCounter current={page + 1} max={numberOfPages} />
      </div>
      <Books>
        <BookContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
        </BookContainer>
        <BookContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
        </BookContainer>
        <BookContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
        </BookContainer>
      </Books>
    </CarouselMain>

  </div>
)};
