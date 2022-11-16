import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface iButton {
  variant?: "primary";
  width?: string;
}

export const OptionsButton = {
  primary: css`
    font-size: var(--sz-text-2);
    color: var(--color-white);
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--bd-radius);
    transition-duration: 0.3s;

    &:hover {
      filter: brightness(1.05);
    }
  `,
};

export const Button = styled.button<iButton>`
  padding: 16px 20px;
  ${({ variant }) => OptionsButton[variant || "primary"]}
  ${({ width }) => {
    if (width?.includes("%")) {
      return css`
        width: ${width};
      `;
    }
    return css`
      width: ${width}px;
    `;
  }};
`;

export const ButtonLink = styled(Link)<iButton>`
  padding: 12px 16px;
  ${({ variant }) => OptionsButton[variant || "primary"]}
  width: ${({ width }) => width}px;
`;
