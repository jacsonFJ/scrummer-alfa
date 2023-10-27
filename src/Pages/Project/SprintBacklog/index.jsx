import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogContainer, BacklogList } from '../ProductBacklog/styles';
import Paginator from '../../../Components/Paginator/index';
import { ButtonDanger, ButtonSuccess } from "../../../Components/Buttons";
import ItemsFilter from '../../../Components/ItemsFilter/index';
import { ItemBacklogLarge } from '../../../Components/ListItems/index';
import { NoSprint, TitleRow } from "./styles";
import { showProject } from "../../../helpers/repositories/projectRepository";
import { closeSprint, showCurrentSprint } from "../../../helpers/repositories/sprintRepository";
import StoreSprint from "../../../Components/Modals/StoreSprint";
import { listSprintBacklog } from "../../../helpers/repositories/itemRepository";

export default function SprintBacklog() {

  const defaultFilterData = {
    sort_field: 'created_at',
    sort_direction: 'asc',
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [sprint, setSprint] = useState(null);
  const [items, setItems] = useState([]);
  const [filterData, setFilterData] = useState(defaultFilterData);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    showProject(id, setProject);
    showCurrentSprint(id, setSprint)
  }, [id]);

  useEffect(() => {
    if (sprint?.id) {
      listSprintBacklog(sprint.id, {page, ...filterData}, response => {
        setItems(response.data);
        setPagination(response.meta);
      });
    }
  }, [sprint, page, filterData]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const afterSprintStored = (modalResponse) => {
    closeModal();
    setSprint(modalResponse);
  };

  const closeSprintAction = () => closeSprint(id, () => setSprint(null));

  return (
    <>
      <Navbar />
      {project && <>
        <HeaderProject project={project} />
        {sprint ? (
          <>
            <BacklogContainer>
              <TitleRow>
                <Link to={`/projetos/${id}/sprint/${sprint.id}`}>
                  Sprint #{sprint.id} - {sprint.title}
                </Link>
                <ButtonDanger onClick={closeSprintAction}>
                  Encerrar Sprint
                </ButtonDanger>
              </TitleRow>
              <BacklogList>
                <ItemsFilter setFilterData={setFilterData} defaultFilterData={defaultFilterData} />
                {items.map(item => (
                  <ItemBacklogLarge key={item.id} item={item} projectId={project.id} />
                ))}
              </BacklogList>
            </BacklogContainer>
            {pagination.last_page && (
              <Paginator pagination={pagination} page={page} setPage={setPage} />
            )}
          </>
        ) : (
          <BacklogContainer>
            <ButtonSuccess onClick={openModal}>
              Iniciar Sprint
            </ButtonSuccess>
            <NoSprint>
              Não há Sprint em andamento
            </NoSprint>
          </BacklogContainer>
        )}
        <StoreSprint
          isOpen={modalIsOpen}
          closeModal={closeModal}
          projectId={project.id}
          onSuccess={afterSprintStored}
        />
      </>}
    </>
  );
}
