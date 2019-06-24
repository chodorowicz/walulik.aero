import * as React from "react";
import commonmark from "commonmark";
import styled from "@emotion/styled"
import striptags from "striptags"

import { StyledContent, StyledContentPure } from "../components"

interface IProps {
  content: string;
  className?: string;
  color?: string;
};

const StyledText = styled.div`
  p:first-child {
    margin-top: 0;
  }
`;

export const MarkdownContainer: React.FC<IProps> = React.memo(({ content, className }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(content);
  const result = writer.render(parsed);
  const strippedResult = striptags(result, "<br>");

  return (
    <StyledText className={className} dangerouslySetInnerHTML={{ __html: strippedResult }} />
  );
});

interface IPropsFull {
  content: string;
  className?: string;
  color?: string;
};

export const MarkdownContainerFull: React.FC<IPropsFull> = React.memo(({ content, className, color }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(content);
  const result = writer.render(parsed);

  return (
    <StyledContent className={className} dangerouslySetInnerHTML={{ __html: result }} color={color} />
  );
});

export const MarkdownContainerPure: React.FC<IPropsFull> = React.memo(({ content, className, color }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(content);
  const result = writer.render(parsed);

  return (
    <StyledContentPure className={className} dangerouslySetInnerHTML={{ __html: result }} color={color} />
  );
});
