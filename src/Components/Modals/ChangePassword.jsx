import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import http from '../../helpers/http';

export default function ChangePassword({ isOpen, onClose }) {

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
    reset,
  } = useForm();

  const subtmitAction = data => {
    http().patch(`/api/users/me/password`, data)
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

  const closeModal = () => {
    onClose();
    reset();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Alterar Senha"
      style={customStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Alterar Senha</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Nova senha' error={errors.password?.message}>
          <Input type='password' {...register('password')} />
        </InputField>
        <InputField title='Confirme a senha' error={errors.confirm_password?.message}>
          <Input type='password' {...register('confirm_password')} />
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
