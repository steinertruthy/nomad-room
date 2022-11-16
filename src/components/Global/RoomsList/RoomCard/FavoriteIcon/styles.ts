import styled, { css } from "styled-components";

interface iContainerFavoriteIconProps {
  isFavorite?: boolean;
}

export const ContainerFavoriteIcon = styled.button<iContainerFavoriteIconProps>`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--color-gray3);
  border-radius: 50%;
  background-color: var(--color-gray5);
  border: none;
  cursor: pointer;

  ${({ isFavorite }) => {
    if (isFavorite) {
      return css`
        background-color: var(--color-bg-like-active);

        svg {
          color: var(--color-primary);
        }
      `;
    }
  }};

  svg {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    top: 22px;
    right: 22px;
  }
`;
