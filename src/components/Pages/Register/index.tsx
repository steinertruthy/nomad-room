import { Header } from "../../../components/Global/Header";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { Headline } from "../../../styles/components/Headline";
import { Loading } from "../../Global/Loading";
import { FormRegister } from "./FormRegister";

export const Register = () => {
  const { isLoading } = useAuthContext();
  return (
    <>
      <Header />
      <Headline height="medium" />
      <FormRegister />

      {isLoading && <Loading />}
    </>
  );
};
