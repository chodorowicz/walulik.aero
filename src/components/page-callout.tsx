import styled from "@emotion/styled"

import { colors, spacings, mq } from "../constants";

export const PageCallout = styled.div`
  background-color: ${colors.darkBlue};
  padding-left: ${spacings.space1of12}%;
  padding-right: ${spacings.space1of12}%;
  padding-top: ${spacings.space50}px;
  padding-bottom: ${spacings.space50}px;
  ${mq.b768} {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

export const ResponsiveStyledPageCallout = styled(PageCallout)`
  margin-top: -140px;

  position: relative;
  z-index: 1;
  ${mq.b768} {
    margin-top: -220px;
  }
`;
