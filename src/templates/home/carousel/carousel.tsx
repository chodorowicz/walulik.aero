import styled from "@emotion/styled"
import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { CarouselCounter } from "./carousel-counter"
import { CarouselArrows } from "./carousel-arrows"
import { spacings, breaksMap, mq } from "../../../constants"
import { isWindow } from "../../../utils"

export function modulo(mod: number): (n: number) => number {
  return (n: number) => ((n % mod) + mod) % mod
}

const CarouselMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${spacings.space40}px;
  ${mq.b768} {
    flex-direction: row;
  }
`

const NavigationSC = styled.div`
  order: 1;
  display: flex;
  justify-content: space-between;
  margin-top: ${spacings.space40}px;

  ${mq.b768} {
    flex-direction: column;
    margin-right: ${spacings.space80}px;
  }
`

const CarouselArrowsContainer = styled.div`
  display: flex;
  ${mq.b768} {
    margin-bottom: 70px;
    flex-direction: column;  
  }
`

const Books = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  ${mq.b768} {
    grid-template-columns: repeat(3, 33%);
    order: 2;
  }
`

const BookContainer = styled.div`
  display: flex; 
  justify-content: center;
  position: relative;
  right: -11%;
  img {
    max-width: 100%;
  }
`

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: isWindow() ? window.innerWidth : 1000,
    height: isWindow() ? window.innerHeight : 1000,
  })
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    return () => { window.removeEventListener("resize", handleResize) }
  }, [])
  return dimensions.width;
}

export const Carousel: React.FC = () => {
  const [page, setPage] = useState(0)
  const dimensions = useWindowDimensions();

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

  const ITEMS_PER_PAGE = dimensions >= breaksMap.b768 ? 3 : 1;
  const { edges } = result.books
  const numberOfPages = Math.ceil(edges.length / ITEMS_PER_PAGE)
  const modNumberOfPages = modulo(numberOfPages)
  if (modNumberOfPages > page) {
    setPage(modNumberOfPages);
  }
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
