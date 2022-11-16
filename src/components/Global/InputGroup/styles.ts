import styled from "styled-components";

export const ContainerInputGroup = styled.div`
  margin-bottom: 18px;
`;

export const Input = styled.input`
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

export const InputError = styled.span`
  display: block;
  color: var(--color-error);
  font-size: var(--sz-text2);
  margin-top: 7px;
`;
