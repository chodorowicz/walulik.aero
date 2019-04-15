import * as React from 'react';
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily } from "../../../constants";
import { Button, ButtonInner } from "../../../components";
import Line from "../../../images/line.inline.svg";

const Container = styled.div`
  background-color: ${colors.darkBlue};
  padding: 51px 100px;
  color: ${colors.white};
`;

const Title = styled.h3`
  font-size: ${fontSizes.size28}px;
  font-family: ${fontFamily.roboto};
`;

export const ContactForm: React.FC = () => {
  return (
    <Container>
      <Title>Send a message</Title>
      <form>
        <div>
          <label>name</label>
          <input />
        </div>
        <div>
          <label>e-mail</label>
          <input />
        </div>
        <label>message</label>
        <textarea />
        <div>
          <Button><ButtonInner>learn more</ButtonInner><Line /></Button>
        </div>
      </form>
      
    </Container>
  );
};
