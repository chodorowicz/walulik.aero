import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, mq, urls } from "../../constants"
import {
  Paragraph,
  WrapperContent,
  SectionTitle,
  AnimatedLink,
  MarkdownContainerPure
} from "../../components"
import { grid12, paddingSides20 } from "../../styles"
import ImageEducation from "../../images/about/education@2x.png"

const BOX_PADDING = 45

const Wrapper = styled.div`
  overflow: hidden;
`

const StyledWrapperContent = styled(WrapperContent)`
  display: grid;
  ${grid12};
  padding-top: 70px;
  padding-bottom: 70px;
  ${mq.b768} {
    padding-top: 130px;
    padding-bottom: 190px;
  }
`

const ColumnPhoto = styled.div`
  grid-column: 1 / span 12;
  grid-row: 2;
  &,
  img {
    max-width: 100%;
  }
  margin-top: ${BOX_PADDING}px;
  ${mq.b768} {
    margin-top: unset;
    img {
      max-width: unset;
    }
    grid-row: 1;
    grid-column: 2 / span 4;
  }
`

const ColumnText = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1;
  ${mq.b768} {
    grid-column: 7 / span 5;
  }
`

const StyledPhoto = styled.img`
  position: relative;
  z-index: 1;
`

const ContactBox = styled.div`
  position: relative;
  margin-top: 120px;
  &:after {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: ${colors.darkBlue};
    top: ${-BOX_PADDING}px;
    bottom: ${-BOX_PADDING}px;
    left: 0;
    right: 0;
  }
  ${mq.b768} {
    &:after {
      left: -140px;
      right: -9999px;
    }
  }
`

const ContactBoxInner = styled.div`
  position: relative;
  z-index: 3;
  ${paddingSides20};
`

export const SectionEducation: React.FC = props => {
  const { educationTop, educationBottom } = props
  return (
    <Wrapper>
      <StyledWrapperContent>
        <ColumnPhoto>
          <StyledPhoto src={ImageEducation} />
        </ColumnPhoto>
        <ColumnText>
          <SectionTitle>
            Education <br /> &amp; distinctions
          </SectionTitle>
          <Paragraph>
            <MarkdownContainerPure content={educationTop} />
          </Paragraph>
          <ContactBox>
            <ContactBoxInner>
              <Paragraph color={colors.white} fontSize={fontSizes.size28}>
                <MarkdownContainerPure content={educationBottom} />
              </Paragraph>
              <AnimatedLink to={urls.contact}>Contact Jan</AnimatedLink>
            </ContactBoxInner>
          </ContactBox>
        </ColumnText>
      </StyledWrapperContent>
    </Wrapper>
  )
}
