import styled from "styled-components";

interface iTextareaProps {
  heigth?: "big" | "medium";
}

const optionsTextarea = {
  big: 200,
  medium: 145,
};

export const ContainerTextareaGroup = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea<iTextareaProps>`
  resize: none;
  height: ${({ heigth }) => optionsTextarea[heigth || "big"]}px;

  font-size: var(--sz-text2);
  padding: 16px 18px;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: var(--color-gray5);
  border-radius: var(--bd-radius);
  transition-duration: 0.3s;
  color: var(--color-gray1);

  &::placeholder {
    color: var(--color-gray3);
    font-size: var(--sz-text2);
  }

  &:is(:hover, :focus) {
    background-color: var(--color-gray4);
  }
`;

export const TextareaError = styled.span`
  display: block;
  color: var(--color-error);
  font-size: var(--sz-text2);
  margin-top: 7px;
`;
