import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCalendar, FiList } from "react-icons/fi";

import { ButtonDanger, ButtonPlus } from "../../../Components/Buttons";
import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogItemContainer, ItemTitle, Row40, Row5 } from "../BacklogItem/styles";
import { CardList, CardListBottom, CardListTitle, CardsRow } from "./styles";
import { ItemBacklogSmall, ItemMeeting } from "../../../Components/ListItems";
import PaginatorSmall from "../../../Components/PaginatorSmall";
import { showProject } from "../../../helpers/repositories/projectRepository";
import { showSprint } from "../../../helpers/repositories/sprintRepository";
import { listSprint } from "../../../helpers/repositories/itemRepository";
import { listSprintMeetings } from "../../../helpers/repositories/meetingRepository";
import StoreMeeting from "../../../Components/Modals/StoreMeeting";

export default function SprintDetail() {

  const [project, setProject] = useState(null);
  const [sprint, setSprint] = useState(null);
  const [items, setItems] = useState([]);
  const [itemsPagination, setItemsPagination] = useState({});
  const [itemsPage, setItemsPage] = useState(1);
  const [meetings, setMeetings] = useState([]);
  const [meetingsPagination, setMeetingsPagination] = useState({});
  const [meetingsPage, setMeetingsPage] = useState(1);
  const [meetingModalIsOpen, setMeetingModalIsOpen] = useState(false);
  
  const { id, sprintId } = useParams();

  const openMeetingModal = () => setMeetingModalIsOpen(true);
  const closeMeetingModal = () => setMeetingModalIsOpen(false);

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

  const listMeetings = () => {
    listSprintMeetings(
      sprintId,
      {
        per_page: 5,
        page: meetingsPage,
      },
      response => {
        setMeetings(response.data);
        setMeetingsPagination(response.meta);
      }
    );
  };

  const onMeetingSuccess = () => {
    closeMeetingModal();
    listMeetings();
  };

  useEffect(() => {
    showProject(id, setProject);
    showSprint(id, sprintId, setSprint);
    listItems();
    listMeetings();
  }, [id, sprintId]);

  useEffect(() => {
    listItems();
  }, [itemsPage]);

  useEffect(() => {
    listMeetings();
  }, [meetingsPage]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} setProject={setProject} />
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
                    <ButtonPlus onClick={openMeetingModal} />
                  </CardListTitle>
                  {meetings.map((meeting) => (
                    <ItemMeeting key={meeting.id} meeting={meeting} projectId={id} />
                  ))}
                  <CardListBottom>
                    {meetingsPagination.last_page && (
                      <PaginatorSmall
                        pagination={meetingsPagination}
                        page={meetingsPage}
                        setPage={setMeetingsPage}
                      />
                    )}
                  </CardListBottom>
                </CardList>
              </CardsRow>
              <StoreMeeting
                isOpen={meetingModalIsOpen}
                closeModal={closeMeetingModal}
                sprint={sprint}
                onSuccess={onMeetingSuccess}
              />
            </BacklogItemContainer>
          )}
        </>
      )}
    </>
  );
}
