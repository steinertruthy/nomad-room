import styled from "styled-components";

export const ContainerPhoto = styled.section`
  height: 250px;
  overflow: hidden;

  @media screen and (min-width: 880px) {
    height: 500px;
    border-bottom-left-radius: var(--bd-radius);
    border-bottom-right-radius: var(--bd-radius);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
