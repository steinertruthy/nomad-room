import styled from "styled-components";

export const ContainerUserMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Photo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 1005;
    height: 100%;
    object-fit: cover;
  }
`;
