import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { BacklogItemContainer, CommentArea, ItemDescription, ItemTitle, LeftEvents, LeftSide, Participant, ParticipantRow, RightRow, RightSide, RightTitle, Row40, Row5, UsersList } from './styles';
import { ButtonDanger, ButtonPlus, ButtonTrash, ButtonWhite } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import InputSelect from '../../../Components/Forms/InputSelect';
import HistoryEvent from '../../../Components/HistoryEvent';
import Note from '../../../Components/Note';
import InputTextArea from '../../../Components/Forms/InputTextArea';
import { showProject } from '../../../helpers/repositories/projectRepository';
import { deleteItem, showItem } from '../../../helpers/repositories/itemRepository';
import { FiEdit } from 'react-icons/fi';
import StoreItem from '../../../Components/Modals/StoreItem';

export default function BacklogItem() {
  const [project, setProject] = useState(null);
  const [item, setItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id, itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    showProject(id, setProject);
    showItem(itemId, setItem);
  }, [id, itemId]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const destroy = () => deleteItem(itemId, () => navigate(`/projetos/${id}/product-backlog`));

  return (
    <>
      <Navbar />
      {project && item && <>
        <HeaderProject project={project} />
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
                <ParticipantRow>
                  <RightTitle>Participantes</RightTitle>
                  <ButtonPlus />
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
                      <ButtonTrash />
                    </ParticipantRow>
                  ))}
                </UsersList>
              </RightRow>
              <RightRow>
                <RightTitle>Etapa</RightTitle>
                <InputSelect>
                  <option value="product-owner">Product Owner</option>
                  <option value="scrum-master">Scrum Master</option>
                  <option value="developer">Developer</option>
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
