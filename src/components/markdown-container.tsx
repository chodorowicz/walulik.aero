import * as React from "react";
import commonmark from "commonmark";

interface IProps {
  content: string;
};

export const MarkdownContainer: React.FC<IProps> = React.memo(({ content }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(content);
  const result = writer.render(parsed);

  return (
    <div dangerouslySetInnerHTML={{ __html: result }}></div>
  );
});
