import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';

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

  const onAccept = () => acceptInvite(invite.id, closeModal);
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
          <h2>Você foi convidado para o projeto {invite?.project}</h2>
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
