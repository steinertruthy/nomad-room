import styled from "styled-components";
import logoMobile from "../../../assets/logoMobile.svg";
import logoDesktop from "../../../assets/logoDesktop.svg";

export const ContainerHeader = styled.header`
  height: 80px;
  border-bottom: 1px solid var(--color-gray4);

  .container__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    height: 50px;
    width: 50px;
    background-image: url(${logoMobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @media screen and (min-width: 450px) {
      width: 185px;
      background-image: url(${logoDesktop});
    }
  }
`;
