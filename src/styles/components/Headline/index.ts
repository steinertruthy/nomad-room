import styled from "styled-components";

interface iHeadlineProps {
  height?: "big" | "medium";
}
const headlineOptions = {
  big: 390,
  medium: 275,
};

export const Headline = styled.section<iHeadlineProps>`
  width: 100%;
  height: ${({ height }) => headlineOptions[height || "big"]}px;
  padding: 0 16px;
  background-image: linear-gradient(
      to right,
      var(--color-bg-headline),
      var(--color-bg-headline)
    ),
    url("https://i.imgur.com/KfVApwq.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
