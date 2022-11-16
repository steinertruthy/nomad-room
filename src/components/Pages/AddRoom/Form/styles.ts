import styled from "styled-components";

export const Form = styled.form`
  padding: 40px;
  border-radius: var(--bd-radius);
  border: 1px solid var(--color-gray4);

  & > span {
    display: block;
    margin-top: 30px;
    font-size: var(--sz-text2);
  }
`;

export const ContainerInput = styled.div`
  margin-bottom: 20px;
`;

export const TextInput = styled.span`
  display: block;
  font-size: var(--sz-title4);
  font-weight: var(--font-weg1);
  margin-bottom: 16px;
`;

export const ContainerWrapperInput = styled.div`
  max-width: 450px;
`;
