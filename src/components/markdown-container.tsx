import * as React from "react";
import commonmark from "commonmark";
import styled from "@emotion/styled"
import striptags from "striptags"

interface IProps {
  content: string;
};

const StyledText = styled.div`
  p:first-child {
    margin-top: 0;
  }
`;

export const MarkdownContainer: React.FC<IProps> = React.memo(({ content }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(content);
  const result = writer.render(parsed);
  const strippedResult = striptags(result, "<br>")

  return (
    <StyledText dangerouslySetInnerHTML={{ __html: strippedResult }} />
  );
});
