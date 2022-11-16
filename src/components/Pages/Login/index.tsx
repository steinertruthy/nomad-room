import { Header } from "../../Global/Header";
import { Headline } from "../../../styles/components/Headline";
import { FormLogin } from "./FormLogin";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { Loading } from "../../Global/Loading";

export const Login = () => {
  const { isLoading } = useAuthContext();
  return (
    <>
      <Header />
      <Headline height="medium" />
      <FormLogin />

      {isLoading && <Loading />}
    </>
  );
};
