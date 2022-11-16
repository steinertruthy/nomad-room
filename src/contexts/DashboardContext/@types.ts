import { ReactNode, ChangeEvent, FormEvent } from "react";
import { iRoom } from "../../components/Pages/Home/@types";

export interface iDashboardContext {
  handleSearchStates: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSetStateInput: (state: string) => void;
  selectedState: string;
  listStatesFiltered: string[];
  inputSearch: string;
  handleSearchRooms: (e: FormEvent) => Promise<void>;
  listRoomsFiltered: iRoom[];
}

export interface iDashboardProvider {
  children: ReactNode;
}
