import styled from "styled-components";

export const ContainerSelectGroup = styled.div`
  margin-bottom: 18px;
`;

export const Select = styled.select`
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

  &:is(:hover, :focus) {
    background-color: var(--color-gray4);
  }
`;

export const SelectError = styled.span`
  display: block;
  color: var(--color-error);
  font-size: var(--sz-text2);
  margin-top: 7px;
`;
