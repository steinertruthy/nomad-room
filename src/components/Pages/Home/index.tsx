import { useEffect, useState } from "react";
import { Header } from "../../../components/Global/Header";
import { RoomsList } from "../../../components/Global/RoomsList";
import { InfiteScroll } from "../../../components/Global/InfiniteScroll";
import { api } from "../../../services/api";
import { iRoom } from "./@types";
import { HeadlineHome } from "./headline";
import { Loading } from "../../Global/Loading";

export const Home = () => {
  const [rooms, setRooms] = useState([] as iRoom[]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRooms = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const { data } = await api.get<iRoom[]>("/rooms", {
          params: {
            _page: page,
            _limit: 6,
          },
        });

        setRooms([...rooms, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getRooms();
  }, [page]);

  const handleNextPage = (): void => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <Header />
      <HeadlineHome />
      <RoomsList rooms={rooms} />
      <InfiteScroll callback={handleNextPage} />

      {isLoading && <Loading />}
    </>
  );
};
