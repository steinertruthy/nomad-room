import { useDashboard } from "../../../../../contexts/DashboardContext/hook";
import { CardState } from "./CardState";
import { ContainerListStates } from "./styles";

export const ListStates = () => {
  const { listStatesFiltered } = useDashboard();

  return (
    <ContainerListStates>
      {listStatesFiltered.map((state) => (
        <CardState key={state} state={state} />
      ))}
    </ContainerListStates>
  );
};
