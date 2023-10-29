import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { BacklogItemContainer, CommentArea, ItemDescription, ItemTitle, LeftEvents, LeftSide, Participant, ParticipantRow, RightRow, RightSide, RightTitle, Row40, Row5, UsersList } from '../BacklogItem/styles';
import { ButtonDanger, ButtonPlus, ButtonTrash, ButtonWhite } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import HistoryEvent from '../../../Components/HistoryEvent';
import Note from '../../../Components/Note';
import InputTextArea from '../../../Components/Forms/InputTextArea';
import { showProject } from '../../../helpers/repositories/projectRepository';
import { addUserToMeeting, deleteMeeting, removeUserFromMeeting, showMeeting } from '../../../helpers/repositories/meetingRepository';
import UserSelect from '../../../Components/UserSelect';

export default function Meeting() {

  const [project, setProject] = useState(null);
  const [meeting, setMeeting] = useState(null);
  
  const { id, meetingId } = useParams();
  const navigate = useNavigate();

  const onDelete = () => {
    deleteMeeting(meetingId, () => navigate(`/projetos/${id}/sprint/${meeting.sprint_id}`));
  };

  const onSelectUser = userId => {
    addUserToMeeting(meetingId, userId, () => showMeeting(meetingId, setMeeting));
  };

  const onRemoveUser = userId => {
    removeUserFromMeeting(meetingId, userId, () => showMeeting(meetingId, setMeeting));
  };

  useEffect(() => {
    showProject(id, setProject);
    showMeeting(meetingId, setMeeting);
  }, [id, meetingId]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} />
          {meeting && (
            <BacklogItemContainer>
              <Row40>
                <ItemTitle>
                  {meeting.title}
                </ItemTitle>
                <ButtonDanger onClick={onDelete}>
                  Arquivar
                </ButtonDanger>
              </Row40>
              <Row5 style={{fontSize: '16px'}}>
                {meeting.date} {meeting.period}
              </Row5>
              <Row40>
                <LeftSide>
                  <ItemDescription dangerouslySetInnerHTML={{__html: meeting.description}} />
                  <LeftEvents>
                    <HistoryEvent icon='edit'>
                      <strong>Loreta</strong> criou este item em <strong>04/06/2023 11:43</strong>
                    </HistoryEvent>
                    <HistoryEvent icon='edit'>
                      <strong>Loreta</strong> editou a descrição em <strong>04/06/2023 11:45</strong>
                    </HistoryEvent>
                    <HistoryEvent>
                      <strong>Loreta</strong> adicionou <strong>Jacson</strong> como participante em <strong>04/06/2023 11:43</strong>
                    </HistoryEvent>
                    <Note />
                    <HistoryEvent>
                      <strong>Jacson</strong>  editou a descrição em <strong>04/06/2023 12:43</strong>
                    </HistoryEvent>
                  </LeftEvents>
                  <CommentArea>
                    <InputTextArea placeholder="Comentar..." style={{minHeight: '67px'}} />
                    <ButtonWhite>
                      Comentar
                    </ButtonWhite>
                  </CommentArea>
                </LeftSide>
                <RightSide>
                  <RightRow>
                    <RightTitle>Criado por</RightTitle>
                    <Participant>
                      <div className='participant-profile'>
                        <ImgCircle size='34px' src={meeting.user.picture_url} />
                        <span className='participant-name'>
                          {meeting.user.name}
                        </span>
                      </div>
                    </Participant>
                  </RightRow>
                  <RightRow>
                    <ParticipantRow>
                      <RightTitle>Participantes</RightTitle>
                      <UserSelect
                        buttonType='plus'
                        endpoint={`/api/meetings/${meeting.id}/users/to-add`}
                        onSelectUser={onSelectUser}
                      />
                    </ParticipantRow>
                    <UsersList>
                      {meeting.users.map(user => (
                        <ParticipantRow key={user.id}>
                          <Participant>
                            <div className='participant-profile'>
                              <ImgCircle size='34px' src={user.picture_url} />
                              <span className='participant-name'>
                                {user.name}
                              </span>
                            </div>
                          </Participant>
                          <ButtonTrash onClick={() => onRemoveUser(user.id)} />
                        </ParticipantRow>
                      ))}
                    </UsersList>
                  </RightRow>
                </RightSide>
              </Row40>
            </BacklogItemContainer>
          )}
        </>
      )}
    </>
  );
}
