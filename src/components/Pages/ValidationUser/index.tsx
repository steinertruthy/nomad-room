import { Header } from "../../../components/Global/Header";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { Headline } from "../../../styles/components/Headline";
import { FormValidationUser } from "./FormValidationUser";
import { Loading } from "../../Global/Loading";

export const ValidationUser = () => {
  const { isLoading } = useAuthContext();
  return (
    <>
      <Header />
      <Headline height="medium" />
      <FormValidationUser />

      {isLoading && <Loading />}
    </>
  );
};
