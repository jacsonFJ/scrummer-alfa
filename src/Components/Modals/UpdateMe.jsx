import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import http from '../../helpers/http';
import { useEffect } from 'react';

export default function UpdateMe({ isOpen, closeModal }) {

  const { user } = useSelector(rootReducer => rootReducer.user);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm();

  const subtmitAction = data => {
    const formData = new FormData();
    if (data.picture.length > 0)
      formData.append('picture', data.picture[0]);
    if (data.name)
      formData.append('name', data.name);
    if (data.email)
      formData.append('email', data.email);

    http().post('/api/users/me', formData, {headers: {"Content-Type": "multipart/form-data"}})
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

  useEffect(() => {
    if (isOpen && user) {
      setValue('name', user.name);
      setValue('email', user.email);
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Editar Perfil"
      style={modalStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Editar Perfil</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Nome' error={errors.name?.message}>
          <Input {...register('name')} />
        </InputField>
        <InputField title='E-mail' error={errors.email?.message}>
          <Input {...register('email')} />
        </InputField>
        <InputField title='Foto' error={errors.picture?.message}>
          <input type='file' {...register('picture')} />
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
