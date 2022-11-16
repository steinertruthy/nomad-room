import styled from "styled-components";

export const ContainerCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 22px;
  box-shadow: var(--shadow);
  border-radius: var(--bd-radius);
  width: 100%;
  max-width: 320px;
  position: relative;
  cursor: pointer;

  h2 {
    text-align: center;
    font-size: 20px;
    max-width: 700px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: unset;
    gap: 22px;

    h2 {
      text-align: unset;
    }
  }
`;

export const CardImage = styled.div`
  width: 100%;
  max-width: 390px;
  height: 158px;
  border-radius: var(--bd-radius);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 222px;
    max-height: 232px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .content__localization {
    display: flex;
    align-items: center;
    gap: 6px;

    span,
    svg {
      font-size: var(--sz-text2);
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 22px;

    p {
      width: 460px;
    }
  }
`;
