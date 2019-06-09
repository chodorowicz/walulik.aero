import * as React from 'react';
import styled from "@emotion/styled"
import { fontWeight, fontSizes, colors, mq, spacings } from '../constants';
import { GlobalUrlContext } from "../context"

import LogoFacebook from "../images/book/facebook"
import LogoLinkedIn from "../images/book/linkedin"
import LogoTwitter from "../images/book/twitter"

const ShareTitle = styled.h3`
  margin-top: 0;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.size15}px;
  color: ${colors.grey2};
`; 

const ShareLogosContainer = styled.div`
  svg {
    margin-right: ${spacings.space20}px;
  }
  ${mq.b768} {
    grid-gap: 20px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-column: 1 / span 3;
  }
  
`;

export const Share: React.FC<{ className?: string }> = ({ className }) => {
  const [href, setHref] = React.useState("");
  React.useEffect(() => {
    setHref(window.location.href)
  }, []);
  return (
    <div className={className}>
      <ShareTitle>Share:</ShareTitle>
      <ShareLogosContainer>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${href}`} target="_blank"><LogoFacebook /></a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`} target="_blank"><LogoLinkedIn /></a>
        <a href={`https://twitter.com/intent/tweet?text=${href}`} target="_blank"><LogoTwitter /></a>
      </ShareLogosContainer>
    </div>
  );
};
