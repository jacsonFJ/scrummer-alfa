import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import http from '../../helpers/http';

export default function InviteUserToProject({ isOpen, closeModal, projectId }) {

  const customStyles = {
    ...modalStyles,
    content: {
      ...modalStyles.content,
      maxWidth: '500px',
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const subtmitAction = data => {
    http.post(`/api/projects/${projectId}/users/create-invite`, data)
      .then(() => closeModal())
      .catch(error => {
        const message = error.response?.data?.message;
        if (message === 'Dados inválidos!') {
          error.response.data.errors.forEach(
            (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
          );
        }
      });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Convidar Participante"
      style={customStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Convidar Participante</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='E-mail' error={errors.email?.message}>
          <Input placeholder='Informe o e-mail do convidado' {...register('email')} />
        </InputField>
        <ModalSeparator />
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ButtonSuccess type="submit">
            Salvar
          </ButtonSuccess>
        </div>
      </ModalForm>
    </ReactModal>
  );
}
