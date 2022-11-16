import styled from "styled-components";

interface iTitle {
  tag?: "h1" | "h2" | "h3" | "h4";
  fontSize?: "title1" | "title2" | "title3";
  fontWeight?: 400 | 500 | 600 | 700;
  color?: "primary" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "white";
  textAlign?: "lefet" | "center" | "right" | "justify";
  lineHeight?: number;
}

interface iText {
  tag?: "p" | "span";
  fontSize?: "text1" | "text2";
  fontWeight?: 400 | 500 | 600 | 700;
  color?: "primary" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "white";
  textAlign?: "lefet" | "center" | "right" | "justify";
  lineHeight?: number;
}

export const Heading = styled("h2").attrs<iTitle>(({ tag }) => ({
  as: tag,
}))<iTitle>`
  font-size: var(--sz-${({ fontSize }) => fontSize});
  font-weight: ${({ fontWeight }) => fontWeight};
  color: var(--color-${({ color }) => color});
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight || 1.5};
`;

export const Text = styled("p").attrs<iText>(({ tag }) => ({
  as: tag,
}))<iText>`
  font-size: var(--sz-${({ fontSize }) => fontSize});
  font-weight: ${({ fontWeight }) => fontWeight};
  color: var(--color-${({ color }) => color});
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight || 1.5};
`;
