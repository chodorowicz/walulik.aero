import React, { useState } from "react"
import styled from "@emotion/styled"
import slugify from "@sindresorhus/slugify"

import { LinkButton } from "../../components"
import { IPaper } from "MyTypes"
import { colors, fontSizes, fontWeight, fontFamily } from "../../constants"
import { grid12 } from "../../styles"

const Grid = styled.div`
  display: grid;
  grid-template-areas: "nav . content ..";
  grid-template-columns: 3fr 1fr 8fr 1fr;
  padding-top: 80px;
  padding-bottom: 160px;
  ${grid12};
`

interface IProps {
  categories: string[]
  researchPapers: IPaper[]
}

const NavButton = styled.button<{ isSelected: boolean }>`
  border: none;
  background: ${({ isSelected }) => (isSelected ? colors.accent : "none")};
  font-size: ${fontSizes.size18}px;
  font-size: ${fontSizes.size18}px;
  font-weight: ${fontWeight.bold};
  color: ${props => (props.isSelected ? colors.white : colors.darkBlue)};
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
`

const NavigationContainer = styled.div`
  grid-column: 2 / span 3;
`

const NavigationInner = styled.div`
  display: inline-flex;
  flex-direction: column;
`

const ContentSC = styled.div`
  grid-column: 5 / span 7;
`

const PaperSC = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grey};
    padding-bottom: 30px;
  }
`

const Title = styled.h2`
  font-size: ${fontSizes.large}px;
  margin-top: 0;
  font-weight: ${fontWeight.normal400};
`

const Where = styled.p`
  font-size: ${fontSizes.size18}px;
  font-weight: ${fontWeight.light};
`

const ButtonAreaSC = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`

const StyledLinkButton = styled(LinkButton)`
  display: inline-block;
`

export const PapersList: React.FC<IProps> = ({
  categories,
  researchPapers,
}) => {
  const [selectedCategory, setCategory] = useState("")

  // to make in SSR compatible
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const section = params.get("section")
    const matchedCategory = categories.find(x => slugify(x) === section)
    const foundCategory =
      matchedCategory !== undefined ? matchedCategory : categories[0]
    setCategory(foundCategory)
  }, [])

  const filteredPapers = researchPapers.filter(
    paper => paper.node.frontmatter.category === selectedCategory
  )
  return (
    <Grid>
      <NavigationContainer>
        <NavigationInner>
          {categories.map(category => (
            <NavButton
              isSelected={selectedCategory === category}
              onClick={() => setCategory(category)}
            >
              {category}
            </NavButton>
          ))}
        </NavigationInner>
      </NavigationContainer>
      <ContentSC>
        {filteredPapers.map(({ node }) => (
          <PaperSC>
            <Title>{node.frontmatter.title}</Title>
            <Where>{node.frontmatter.where}</Where>
            <ButtonAreaSC>
              <StyledLinkButton to={node.fields.slug}>
                See More
              </StyledLinkButton>
            </ButtonAreaSC>
          </PaperSC>
        ))}
      </ContentSC>
    </Grid>
  )
}
