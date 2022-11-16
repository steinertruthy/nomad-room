import styled from "styled-components";

export const ContainerContact = styled.section`
  padding: 36px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray4);
  border-bottom-left-radius: var(--bd-radius);
  border-bottom-right-radius: var(--bd-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 390px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1020px) {
    width: max-content;
    border-radius: var(--bd-radius);
    flex-direction: column;
    align-self: flex-end;
    margin-right: 34px;
    margin-top: -88px;
  }
`;
