import styled from "styled-components";

export const ContainerRoomList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  flex-basis: 0;
  justify-content: center;
  margin-top: 40px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;
