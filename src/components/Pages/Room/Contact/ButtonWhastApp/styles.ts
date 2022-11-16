import styled from "styled-components";

export const ContainerButtonWhatsApp = styled.a`
  padding: 12px 30px;
  border-radius: var(--bd-radius);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: var(--color-white);
    font-size: 32px;
  }

  span {
    color: white;

    @media screen and (min-width: 390px) {
      display: none;
    }

    @media screen and (min-width: 500px) {
      display: inline;
    }
  }
`;
