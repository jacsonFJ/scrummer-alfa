import { BacklogContainer, BacklogList } from "./styles";
import { ButtonSuccess } from '../../../Components/Buttons';
import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import ItemsFilter from "../../../Components/ItemsFilter";
import { ItemBacklogLarge } from "../../../Components/ListItems";
import Paginator from '../../../Components/Paginator/index';

export default function ProductBacklog() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <BacklogContainer>
        <ButtonSuccess>
          Adicionar Item
        </ButtonSuccess>
        <BacklogList>
          <ItemsFilter />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
          <ItemBacklogLarge />
        </BacklogList>
      </BacklogContainer>
      <Paginator />
    </>
  );
}
