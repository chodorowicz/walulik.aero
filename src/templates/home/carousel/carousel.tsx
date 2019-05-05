import styled from "@emotion/styled"
import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { CarouselCounter } from "./carousel-counter"
import { CarouselArrows } from "./carousel-arrows"
import { spacings } from "../../../constants"

export function modulo(mod: number): (n: number) => number {
  return (n: number) => ((n % mod) + mod) % mod
}

const CarouselMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacings.space40}px;
`

const NavigationSC = styled.div`
  margin-right: ${spacings.space80}px;
`

const CarouselArrowsContainer = styled.div`
  margin-bottom: 70px;
`

const Books = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
`

const BookContainer = styled.div`
  img {
    max-width: 100%;
  }
`

export const Carousel: React.FC = () => {
  const [page, setPage] = useState(0)

  const result = useStaticQuery(graphql`
    query BooksQuery2 {
      books: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "book-page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              publisher
              image {
                childImageSharp {
                  fixed(width: 600) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const ITEMS_PER_PAGE = 3
  const { edges } = result.books
  const numberOfPages = Math.ceil(edges.length / ITEMS_PER_PAGE)
  const modNumberOfPages = modulo(numberOfPages)
  const nextPage = () => setPage(modNumberOfPages(page + 1))
  const prevPage = () => setPage(modNumberOfPages(page - 1))

  const indexOfFirstItem = page * ITEMS_PER_PAGE
  const edgesToDisplay = result.books.edges.slice(
    indexOfFirstItem,
    indexOfFirstItem + ITEMS_PER_PAGE
  )

  return (
    <div>
      <CarouselMain>
        <NavigationSC>
          <CarouselArrowsContainer>
            <CarouselArrows next={nextPage} prev={prevPage} />
          </CarouselArrowsContainer>
          <CarouselCounter current={page + 1} max={numberOfPages} />
        </NavigationSC>
        <Books>
          {edgesToDisplay.map(edge => (
            <BookContainer>
              {/* <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed} /> */}
              <Link to={edge.node.fields.slug}>
                <img
                  src={edge.node.frontmatter.image.childImageSharp.fixed.src}
                />
              </Link>
            </BookContainer>
          ))}
        </Books>
      </CarouselMain>
    </div>
  )
}
