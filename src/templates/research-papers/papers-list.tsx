import React, { useState } from "react"
import styled from "@emotion/styled"
import slugify from "@sindresorhus/slugify"

import { LinkButton } from "../../components"
import { IPaper } from "MyTypes"
import { colors, fontSizes, fontWeight, mq, spacings } from "../../constants"
import { grid12, paddingSides20, paddingSides0 } from "../../styles"
import posed, { PoseGroup } from "react-pose"

const Grid = styled.div`
  padding-top: 80px;
  padding-bottom: 160px;
  ${paddingSides20};
  ${grid12};
  ${mq.b768} {
    ${paddingSides0};
  }
`

interface IProps {
  categories: string[]
  researchPapers: IPaper[]
}

const PARAM_SECTION = "section"

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
  cursor: pointer;
`

const NavigationContainer = styled.div`
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: 2 / span 3;
  }
`

const NavigationInner = styled.div`
  display: inline-flex;
  flex-direction: column;
`

const ContentSC = styled.div`
  padding-top: ${spacings.space60}px;
  grid-column: 1 / span 12;
  ${mq.b768} {
    padding-top: 0;
    grid-column: 5 / span 7;
  }
`

const PaperSC = styled.div`
  border-bottom: 1px solid ${colors.grey};
  margin-bottom: 30px;
  padding-bottom: 30px;
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
  padding-top: 8px;
  padding-bottom: 8px;
`

const PosedPaper = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 150, opacity: 0 },
})

const PosedPaperSC = styled(PosedPaper)``

function setCategoryParam(category: string) {
  const params = new URLSearchParams(window.location.search)
  params.set(PARAM_SECTION, slugify(category));
  window.history.replaceState({}, '', `${location.pathname}?${params}`);
}

export const PapersList: React.FC<IProps> = ({
  categories,
  researchPapers,
}) => {
  const [selectedCategory, setCategory] = useState("")

  // to make in SSR compatible
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const section = params.get(PARAM_SECTION)
    const matchedCategory = categories.find(x => slugify(x) === section)
    const foundCategory =
      matchedCategory !== undefined ? matchedCategory : categories[0]
    setCategory(foundCategory)
    setCategoryParam(foundCategory)
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
              onClick={() => {
                setCategory(category)
                setCategoryParam(category)
              }}
            >
              {category}
            </NavButton>
          ))}
        </NavigationInner>
      </NavigationContainer>
      <ContentSC>
        <PoseGroup>
          {filteredPapers.map(({ node }) => (
            <PosedPaperSC key={node.frontmatter.title}>
              <PaperSC>
                <Title>{node.frontmatter.title}</Title>
                <Where>{node.frontmatter.where}</Where>
                <ButtonAreaSC>
                  <StyledLinkButton to={node.fields.slug}>
                    See More
                  </StyledLinkButton>
                </ButtonAreaSC>
              </PaperSC>
            </PosedPaperSC>
          ))}
        </PoseGroup>
      </ContentSC>
    </Grid>
  )
}
