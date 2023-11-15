import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import { ButtonDanger, ButtonSuccess } from '../Buttons';
import { acceptInvite, refuseInvite } from '../../helpers/repositories/inviteRepository';

export default function ShowInvite({ isOpen, closeModal, invite }) {

  const customStyles = {
    ...modalStyles,
    content: {
      ...modalStyles.content,
      maxWidth: '400px',
    }
  };
  
  const navigate = useNavigate();

  const onAccept = () => {
    acceptInvite(invite.id, () => {
      closeModal();
      navigate(`/projetos/${invite.project.id}/detalhes`);
    });
  };

  const onRefuse = () => refuseInvite(invite.id, closeModal);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Convite"
      style={customStyles}
    >
      <ModalForm as='div'>
        <ModalHeader>
          <h2>Você foi convidado para o projeto {invite?.project?.name}</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <ModalSeparator />
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '8px'}}>
          <ButtonSuccess onClick={onAccept} width='120px'>
            Aceitar
          </ButtonSuccess>
          <ButtonDanger onClick={onRefuse} width='120px'>
            Recusar
          </ButtonDanger>
        </div>
      </ModalForm>
    </ReactModal>
  );
}
