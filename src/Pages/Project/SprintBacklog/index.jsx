import { Link } from "react-router-dom";

import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogContainer, BacklogList } from '../ProductBacklog/styles';
import Paginator from '../../../Components/Paginator/index';
import { ButtonDanger } from "../../../Components/Buttons";
import ItemsFilter from '../../../Components/ItemsFilter/index';
import { ItemBacklogLarge } from '../../../Components/ListItems/index';
import { TitleRow } from "./styles";

export default function SprintBacklog() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <BacklogContainer>
        <TitleRow>
          <Link to="/projetos/sprint">
            Sprint #9 - Título da sprint
          </Link>
          <ButtonDanger>
            Encerrar Sprint
          </ButtonDanger>
        </TitleRow>
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
