import { Header } from "../../Global/Header";
import { ContainerWrapper } from "../../../styles/containers";
import { Heading } from "../../../styles/components/Typography";
import { ContainerAddRoom } from "./styles";
import { FormAddRoom } from "./Form";

export const AddRoom = () => {
  return (
    <>
      <Header />

      <ContainerAddRoom>
        <ContainerWrapper className="container__wrapper">
          <Heading fontSize="title2" textAlign="center">
            Disponibilize seu quarto
          </Heading>
          <FormAddRoom />
        </ContainerWrapper>
      </ContainerAddRoom>
    </>
  );
};
