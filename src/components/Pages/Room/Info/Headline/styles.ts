import styled from "styled-components";

export const ContainerHeadline = styled.div`
  h2 {
    font-size: var(--sz-title3);
    line-height: 1.5;

    @media screen and (min-width: 1020px) {
      font-size: var(--sz-title2);
    }
  }
`;
