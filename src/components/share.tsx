import * as React from 'react';
import styled from "@emotion/styled"
import { fontWeight, fontSizes, colors, mq, spacings } from '../constants';

import LogoFacebook from "../images/book/facebook.svg"
import LogoLinkedIn from "../images/book/linkedin.svg"
import LogoTwitter from "../images/book/twitter.svg"

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

export const Share: React.FC = () => {
  return (
    <div>
      <ShareTitle>Share:</ShareTitle>
      <ShareLogosContainer>
        <LogoFacebook />
        <LogoLinkedIn />
        <LogoTwitter />
      </ShareLogosContainer>
    </div>
  );
};
