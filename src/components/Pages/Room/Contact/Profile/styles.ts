import styled from "styled-components";

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-weight: var(--font-weg3);
  }
`;

export const Photo = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
