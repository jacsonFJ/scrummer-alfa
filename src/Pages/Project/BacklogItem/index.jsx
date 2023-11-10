import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { BacklogItemContainer, CommentArea, ItemDescription, ItemTitle, LeftEvents, LeftSide, Participant, ParticipantRow, RightRow, RightSide, RightTitle, Row40, Row5, UsersList } from './styles';
import { ButtonDanger, ButtonTrash, ButtonWhite } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import InputSelect from '../../../Components/Forms/InputSelect';
import HistoryEvent from '../../../Components/HistoryEvent';
import Note from '../../../Components/Note';
import { showProject } from '../../../helpers/repositories/projectRepository';
import { addUserToItem, changeItemStage, deleteItem, itemComment, itemHistory, removeUserFromItem, showItem } from '../../../helpers/repositories/itemRepository';
import StoreItem from '../../../Components/Modals/StoreItem';
import UserSelect from '../../../Components/UserSelect';
import { Input } from '../../../Components/Forms/InputText';

export default function BacklogItem() {

  const [history, setHistory] = useState([]);
  const [project, setProject] = useState(null);
  const [item, setItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id, itemId } = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, reset} = useForm();

  useEffect(() => {
    showProject(id, setProject);
    showItem(itemId, setItem);
    itemHistory(itemId, setHistory);
  }, [id, itemId]);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => {
    setModalIsOpen(false);
    showItem(itemId, setItem);
    itemHistory(itemId, setHistory);
  };

  const destroy = () => deleteItem(itemId, () => navigate(`/projetos/${id}/product-backlog`));

  const onSelectUser = userId => {
    addUserToItem(itemId, userId, () => showItem(itemId, setItem));
  };

  const onRemoveUser = userId => {
    removeUserFromItem(itemId, userId, () => showItem(itemId, setItem));
  };

  const onStageChange = event => {
    changeItemStage(itemId, event.target.value, () => showItem(itemId, setItem));
  };

  const subtmitAction = data => {
    itemComment(itemId, data, () => {
      reset();
      itemHistory(itemId, setHistory);
    });
  };

  return (
    <>
      <Navbar />
      {project && item && <>
        <HeaderProject project={project} setProject={setProject} />
        <BacklogItemContainer>
          <Row40>
            <ItemTitle>
              {item.title}
              <span>#{item.id}</span>
              <button onClick={openModal}>
                <FiEdit size={16} />
              </button>
            </ItemTitle>
            <ButtonDanger onClick={destroy}>
              Arquivar
            </ButtonDanger>
          </Row40>
          <Row5>Aberto a {item.open_since}</Row5>
          <Row40>
            <LeftSide>
              <ItemDescription dangerouslySetInnerHTML={{__html: item.description}} />
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
                <ButtonWhite type="submit">
                  Comentar
                </ButtonWhite>
              </CommentArea>
            </LeftSide>
            <RightSide>
              <RightRow>
                <ParticipantRow>
                  <RightTitle>Participantes</RightTitle>
                  <UserSelect
                    buttonType='plus'
                    endpoint={`/api/items/${item.id}/users/to-add`}
                    onSelectUser={onSelectUser}
                  />
                </ParticipantRow>
                <UsersList>
                  {item.users.map(user => (
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
              <RightRow>
                <RightTitle>Etapa</RightTitle>
                <InputSelect defaultValue={item.stage_id} onChange={onStageChange}>
                  <option value="1">Product Backlog</option>
                  <option value="2">Sprint Backlog</option>
                  {item.stage_id == 3 && (
                    <option value="3">Working Increment of the Software</option>
                  )}
                </InputSelect>
              </RightRow>
            </RightSide>
          </Row40>
        </BacklogItemContainer>
        <StoreItem
          projectId={project.id}
          isOpen={modalIsOpen}
          closeModal={closeModal}
          item={item}
        />
      </>}
    </>
  );
}
