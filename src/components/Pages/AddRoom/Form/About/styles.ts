import styled from "styled-components";

export const ContainerCheckbox = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: var(--color-gray5);
  }

  input[type="checkbox"] {
    width: 0px;
    height: 0px;
    margin: 0;
  }

  input[type="checkbox"]:checked ~ span {
    background-color: var(--color-primary);
  }
`;

export const ContainerAbout = styled.div`
  max-width: 440px;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;
