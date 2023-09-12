import { FiCalendar, FiList } from "react-icons/fi";
import { ButtonDanger, ButtonPlus } from "../../../Components/Buttons";
import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogItemContainer, ItemTitle, Row40, Row5 } from "../BacklogItem/styles";
import { CardList, CardListBottom, CardListTitle, CardsRow } from "./styles";
import { ItemBacklogSmall } from "../../../Components/ListItems";
import PaginatorSmall from "../../../Components/PaginatorSmall";

export default function SprintDetail() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <BacklogItemContainer>
        <Row40>
          <ItemTitle>
            Sprint #9 - Título da Sprint
          </ItemTitle>
          <ButtonDanger>Encerrar Sprint</ButtonDanger>
        </Row40>
        <Row5>Aberto em 27/07/2023</Row5>
        <CardsRow>
          <CardList>
            <CardListTitle>
              <div className="card-title">
                <FiList size={24} />
                <h3>Sprint Backlog</h3>
              </div>
              <ButtonPlus />
            </CardListTitle>
            <ItemBacklogSmall to='/projetos/teste/item' />
            <ItemBacklogSmall to='/projetos/teste/item' />
            <ItemBacklogSmall to='/projetos/teste/item' />
            <ItemBacklogSmall to='/projetos/teste/item' />
            <ItemBacklogSmall to='/projetos/teste/item' />
            <CardListBottom>
              <PaginatorSmall />
            </CardListBottom>
          </CardList>
          <CardList>
            <CardListTitle>
              <div className="card-title">
                <FiCalendar size={24} />
                <h3>Reuniões</h3>
              </div>
              <ButtonPlus />
            </CardListTitle>
            <ItemBacklogSmall to='/projetos/teste/reunioes' />
            <ItemBacklogSmall to='/projetos/teste/reunioes' />
            <ItemBacklogSmall to='/projetos/teste/reunioes' />
            <ItemBacklogSmall to='/projetos/teste/reunioes' />
            <ItemBacklogSmall to='/projetos/teste/reunioes' />
            <CardListBottom>
              <PaginatorSmall />
            </CardListBottom>
          </CardList>
        </CardsRow>
      </BacklogItemContainer>
    </>
  );
}
