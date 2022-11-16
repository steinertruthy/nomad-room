import styled from "styled-components";

export const ContainerOptions = styled.ul`
  position: absolute;
  top: 49px;
  right: 0px;
  width: 283px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray4);
  border-bottom-left-radius: var(--bd-radius);
  border-bottom-right-radius: var(--bd-radius);
  overflow: hidden;

  li {
    a {
      display: block;
      color: var(--color-gray1);
      padding: 20px;

      &:hover {
        background-color: var(--color-gray5);
      }
    }
  }
`;
