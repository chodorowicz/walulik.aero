import React, { useState } from "react"
import styled from "@emotion/styled"

import { LinkButton } from "../../components";
import { IPaper } from "MyTypes"
import { colors, fontSizes, fontWeight, fontFamily } from "../../constants"

const Grid = styled.div`
  display: grid;
  grid-template-areas: "nav . content ..";
  grid-template-columns: 3fr 1fr 8fr 1fr;
  padding-top: 80px;
  padding-bottom: 160px;
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

const ContentSC = styled.div`
  grid-area: content;
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
`;

const ButtonAreaSC = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLinkButton = styled(LinkButton)`
  display: inline-block;
`;

export const PapersList: React.FC<IProps> = ({
  categories,
  researchPapers,
}) => {
  const [selectedCategory, setCategory] = useState(categories[0])
  const filteredPapers = researchPapers.filter(
    paper => paper.node.frontmatter.category === selectedCategory
  )
  return (
    <Grid>
      <div>
        {categories.map(category => (
          <NavButton
            isSelected={selectedCategory === category}
            onClick={() => setCategory(category)}
          >
            {category}
          </NavButton>
        ))}
      </div>
      <ContentSC>
        {filteredPapers.map(({ node }) => (
          <PaperSC>
            <Title>{node.frontmatter.title}</Title>
            <Where>{node.frontmatter.where}</Where>
            <ButtonAreaSC>
              <StyledLinkButton to={node.fields.slug}>See More</StyledLinkButton>
            </ButtonAreaSC>
          </PaperSC>
        ))}
      </ContentSC>
    </Grid>
  )
}
