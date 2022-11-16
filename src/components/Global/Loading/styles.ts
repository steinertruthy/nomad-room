import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 50px;
    height: 50px;
    border: 5px solid var(--color-gray4);
    border-left-color: var(--color-primary);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: loadingSpin 0.5s infinite ease-in;
  }

  @keyframes loadingSpin {
    to {
      transform: rotate(1turn);
    }
  }
`;
