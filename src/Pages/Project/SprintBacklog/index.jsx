import { Link } from "react-router-dom";

import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogContainer, BacklogList } from '../ProductBacklog/styles';
import Paginator from '../../../Components/Paginator/index';
import { ButtonDanger, ButtonSuccess } from "../../../Components/Buttons";
import ItemsFilter from '../../../Components/ItemsFilter/index';
import { ItemBacklogLarge } from '../../../Components/ListItems/index';
import { NoSprint, TitleRow } from "./styles";

export default function SprintBacklog() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      {false ? (
        <BacklogContainer>
          <ButtonSuccess>
            Iniciar Sprint
          </ButtonSuccess>
          <NoSprint>
            Não há Sprint em andamento
          </NoSprint>
        </BacklogContainer>
      ) : (
        <>
          <BacklogContainer>
            <TitleRow>
              <Link to="/projetos/teste/sprint">
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
      )}
    </>
  );
}
