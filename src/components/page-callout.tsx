import React from "react"
import styled from "@emotion/styled"

import { colors } from "../constants";

const Wrapper = styled.div`
  background-color: ${colors.darkBlue};
  padding: 90px 98px;
`;


export const PageCallout: React.FC = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)