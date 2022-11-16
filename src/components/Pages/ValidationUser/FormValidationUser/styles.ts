import styled from "styled-components";

export const ContainerForm = styled.section`
  width: 100%;
  max-width: 1002px;
  padding: 0 16px;
  margin: 0 auto;

  form {
    width: unset;
    max-width: unset;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 20px;
      align-self: flex-end;
    }
  }
`;
