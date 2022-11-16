import {
  createContext,
  useState,
  ChangeEvent,
  useEffect,
  FormEvent,
} from "react";
import { iRoom } from "../../components/Pages/Home/@types";
import { api } from "../../services/api";
import { dbStates } from "../../utils/dbStates";
import { iDashboardContext, iDashboardProvider } from "./@types";

export const DashboardContext = createContext<iDashboardContext>(
  {} as iDashboardContext
);

export const DashboardProvider = ({ children }: iDashboardProvider) => {
  const [listStatesFiltered, setListStatesFiltered] = useState([] as string[]);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [listRooms, setListRooms] = useState([] as iRoom[]);
  const [listRoomsFiltered, setListRoomsFiltered] = useState([] as iRoom[]);

  useEffect(() => {
    const getRoomsState = async (): Promise<void> => {
      try {
        const response = await api.get<iRoom[]>("/rooms");
        const { data } = response;

        setListRooms(data);
        setListRoomsFiltered(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRoomsState();
  }, []);

  const handleSearchStates = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputSearchText = event.target.value;
    const searchText = inputSearchText.toLowerCase().trim();

    if (searchText != "") {
      const statesFiltered = dbStates.filter((state) =>
        state.toLowerCase().includes(searchText)
      );

      setListStatesFiltered(statesFiltered);
    } else {
      setListStatesFiltered([]);
      setSelectedState("");
    }
    setInputSearch(inputSearchText);
  };

  const handleSetStateInput = (state: string): void => {
    setInputSearch(state);
    setSelectedState(state);
    setListStatesFiltered([]);
  };

  const handleSearchRooms = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const uf = selectedState.slice(-2);

    if (selectedState) {
      try {
        const response = await api.get<iRoom[]>(`/rooms`, {
          params: {
            "localization.state": uf,
          },
        });

        const { data } = response;
        setListRoomsFiltered(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setInputSearch("");
      setListStatesFiltered([]);
    }

    if (!inputSearch) {
      setListRoomsFiltered(listRooms);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        handleSearchStates,
        handleSetStateInput,
        selectedState,
        listStatesFiltered,
        inputSearch,
        handleSearchRooms,
        listRoomsFiltered,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
