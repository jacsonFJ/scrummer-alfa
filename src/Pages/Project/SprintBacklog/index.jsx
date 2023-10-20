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
import { showCurrentSprint } from "../../../helpers/repositories/sprintRepository";
import StoreSprint from "../../../Components/Modals/StoreSprint";

export default function SprintBacklog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [sprint, setSprint] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    showProject(id, setProject);
    showCurrentSprint(id, setSprint)
  }, [id]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const afterSprintStored = (modalResponse) => {
    closeModal();
    setSprint(modalResponse);
  };

  return (
    <>
      <Navbar />
      {project && <>
        <HeaderProject project={project} />
        {sprint ? (
          <>
            <BacklogContainer>
              <TitleRow>
                <Link to="/projetos/teste/sprint">
                  Sprint #{sprint.id} - {sprint.title}
                </Link>
                <ButtonDanger>
                  Encerrar Sprint
                </ButtonDanger>
              </TitleRow>
              <BacklogList>
                <ItemsFilter />
                {/* <ItemBacklogLarge />
                <ItemBacklogLarge />
                <ItemBacklogLarge />
                <ItemBacklogLarge />
                <ItemBacklogLarge />
                <ItemBacklogLarge />
                <ItemBacklogLarge /> */}
              </BacklogList>
            </BacklogContainer>
            {/* <Paginator /> */}
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
