import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { BacklogItemContainer, CommentArea, ItemDescription, ItemTitle, LeftEvents, LeftSide, Participant, ParticipantRow, RightRow, RightSide, RightTitle, Row40, Row5, UsersList } from '../BacklogItem/styles';
import { ButtonDanger, ButtonPlus, ButtonTrash, ButtonWhite } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import HistoryEvent from '../../../Components/HistoryEvent';
import Note from '../../../Components/Note';
import { showProject } from '../../../helpers/repositories/projectRepository';
import { addUserToMeeting, deleteMeeting, meetingComment, meetingHistory, removeUserFromMeeting, showMeeting } from '../../../helpers/repositories/meetingRepository';
import UserSelect from '../../../Components/UserSelect';
import { Input } from '../../../Components/Forms/InputText';

export default function Meeting() {

  const [project, setProject] = useState(null);
  const [meeting, setMeeting] = useState(null);
  const [history, setHistory] = useState([]);
  
  const { id, meetingId } = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, reset} = useForm();

  const onDelete = () => {
    deleteMeeting(meetingId, () => navigate(`/projetos/${id}/sprint/${meeting.sprint_id}`));
  };

  const onSelectUser = userId => {
    addUserToMeeting(meetingId, userId, () => showMeeting(meetingId, setMeeting));
  };

  const onRemoveUser = userId => {
    removeUserFromMeeting(meetingId, userId, () => showMeeting(meetingId, setMeeting));
  };

  const subtmitAction = data => {
    meetingComment(meetingId, data, () => {
      reset();
      meetingHistory(meetingId, setHistory);
    });
  };

  useEffect(() => {
    showProject(id, setProject);
    showMeeting(meetingId, setMeeting);
    meetingHistory(meetingId, setHistory);
  }, [id, meetingId]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} setProject={setProject} />
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
                    {history.map(hEvent => (
                      <>
                        {hEvent.type === 'comment' ? (
                          <Note key={hEvent.id} note={hEvent} />
                        ) : (
                          <HistoryEvent key={hEvent.id} history={hEvent} />
                        )}
                      </>
                    ))}
                  </LeftEvents>
                  <CommentArea onSubmit={handleSubmit(subtmitAction)}>
                  <Input
                    as="textarea"
                    placeholder="Comentar..."
                    {...register('description')}
                    style={{minHeight: '67px'}}
                  />
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
