import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCalendar, FiList } from "react-icons/fi";

import { ButtonDanger, ButtonPlus } from "../../../Components/Buttons";
import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogItemContainer, ItemTitle, Row40, Row5 } from "../BacklogItem/styles";
import { CardList, CardListBottom, CardListTitle, CardsRow } from "./styles";
import { ItemBacklogSmall } from "../../../Components/ListItems";
import PaginatorSmall from "../../../Components/PaginatorSmall";
import { showProject } from "../../../helpers/repositories/projectRepository";
import { showSprint } from "../../../helpers/repositories/sprintRepository";
import { listSprint } from "../../../helpers/repositories/itemRepository";

export default function SprintDetail() {

  const [project, setProject] = useState(null);
  const [sprint, setSprint] = useState(null);
  const [items, setItems] = useState([]);
  const [itemsPagination, setItemsPagination] = useState({});
  const [itemsPage, setItemsPage] = useState(1);
  
  const { id, sprintId } = useParams();

  const listItems = () => {
    listSprint(
      sprintId,
      {
        per_page: 5,
        page: itemsPage,
      },
      response => {
        setItems(response.data);
        setItemsPagination(response.meta);
      }
    );
  };

  useEffect(() => {
    showProject(id, setProject);
    showSprint(id, sprintId, setSprint);
    listItems();
  }, [id, sprintId]);

  useEffect(() => {
    listItems();
  }, [itemsPage]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} />
          {sprint && (
            <BacklogItemContainer>
              <Row40>
                <ItemTitle>
                  Sprint #{sprint.id} - {sprint.title}
                </ItemTitle>
                <ButtonDanger>Encerrar Sprint</ButtonDanger>
              </Row40>
              <Row5>Aberto em {sprint.created_at}</Row5>
              <CardsRow>
                <CardList>
                  <CardListTitle>
                    <div className="card-title">
                      <FiList size={24} />
                      <h3>Sprint Backlog</h3>
                    </div>
                    <ButtonPlus as={Link} to={`/projetos/${id}/product-backlog`} />
                  </CardListTitle>
                  {items.map(item => (
                    <ItemBacklogSmall key={item.id} item={item} projectId={id} />
                  ))}
                  <CardListBottom>
                    {itemsPagination.last_page && (
                      <PaginatorSmall
                        pagination={itemsPagination}
                        page={itemsPage}
                        setPage={setItemsPage}
                      />
                    )}
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
                  {/* <ItemBacklogSmall to='/projetos/teste/reunioes' />
                  <ItemBacklogSmall to='/projetos/teste/reunioes' />
                  <ItemBacklogSmall to='/projetos/teste/reunioes' />
                  <ItemBacklogSmall to='/projetos/teste/reunioes' />
                  <ItemBacklogSmall to='/projetos/teste/reunioes' /> */}
                  <CardListBottom>
                    {/* <PaginatorSmall /> */}
                  </CardListBottom>
                </CardList>
              </CardsRow>
            </BacklogItemContainer>
          )}
        </>
      )}
    </>
  );
}
