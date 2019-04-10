import React from "react"
import styled from "@emotion/styled"

import { PageCallout } from "../../components";

const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`;

export const SectionAbout: React.FC = () => (
  <Wrapper>
    <PageCallout>
      About
      text
    </PageCallout>
  </Wrapper>
)