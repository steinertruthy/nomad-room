import { useDashboard } from "../../../../../../contexts/DashboardContext/hook";
import { ContainerCardState } from "./styles";

interface iCardStateProps {
  state: string;
}

export const CardState = ({ state }: iCardStateProps) => {
  const { handleSetStateInput } = useDashboard();

  return (
    <ContainerCardState onClick={() => handleSetStateInput(state)}>
      {state}
    </ContainerCardState>
  );
};
