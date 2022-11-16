import { Headline } from "../../../../styles/components/Headline";
import { Heading } from "../../../../styles/components/Typography";
import { ListStates } from "./ListStates";
import { SearchRoomState } from "./SearchRoomState";
import { ContainerHeadlineSearch } from "./styles";

export const HeadlineSearch = () => {
  return (
    <Headline>
      <ContainerHeadlineSearch>
        <Heading fontSize="title1" color="white" textAlign="center">
          Pesquisar Quartos
        </Heading>
        <div>
          <SearchRoomState />
          <ListStates />
        </div>
      </ContainerHeadlineSearch>
    </Headline>
  );
};
