import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddRoom } from "../../../../validations/schemaAddRoom";
import { Button } from "../../../../styles/components/Buttons";
import { api } from "../../../../services/api";
import { Form, ContainerWrapperInput } from "./styles";
import { Title } from "./Title";
import { Description } from "./Description";
import { About } from "./About";
import { Localization } from "./Localization";
import { RoomPhoto } from "./RoomPhoto";
import { Contact } from "./Contact";
import { iFormAddRoom, iNewRoom } from "./@types";
import { Loading } from "../../../Global/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const token = localStorage.getItem("@nomadRoom:token");
const userId = Number(localStorage.getItem("@nomadRoom:userId"));

export const FormAddRoom = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormAddRoom>({
    resolver: yupResolver(schemaAddRoom),
  });

  const handleCreateRoom = (data: iFormAddRoom): void => {
    const {
      title,
      description,
      gym,
      internet,
      tv,
      garage,
      animals,
      furnished,
      zip_code,
      street,
      district,
      city,
      state,
      number,
      room_photo,
      contact,
    } = data;

    //Regex for only numbers
    const regex = /\D/g;
    const numberFormatted = +number.replaceAll(regex, "");
    const contactFormatted = +contact.replaceAll(regex, "");

    const newRoom = {
      userId: userId,
      title: title,
      description: description,
      about: {
        gym: gym,
        internet: internet,
        tv: tv,
        garage: garage,
        animals: animals,
        furnished: furnished,
      },
      localization: {
        zip_code: zip_code,
        street: street,
        district: district,
        city: city,
        state: state,
        number: numberFormatted,
      },
      room_photo: room_photo,
      contact: contactFormatted,
    };

    handleAddRoom(newRoom);
  };

  const handleAddRoom = async (newRoom: iNewRoom): Promise<void> => {
    setIsLoading(true);
    try {
      await api.post("/rooms", newRoom, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Quarto adicionado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit(handleCreateRoom)}>
        <Title register={register} errors={errors} />
        <Description register={register} errors={errors} />
        <About register={register} />

        <ContainerWrapperInput>
          <Localization formRef={formRef} register={register} errors={errors} />
          <RoomPhoto register={register} errors={errors} />
          <Contact formRef={formRef} register={register} errors={errors} />
        </ContainerWrapperInput>

        <Button type="submit">Disponibilizar</Button>

        <span>Todas as informações com (*) são obrigatórias</span>
      </Form>

      {isLoading && <Loading />}
    </>
  );
};
