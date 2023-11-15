import { FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { useEffect } from 'react';

import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from '../ModalComponents';
import { ButtonSuccess } from '../Buttons';
import { useForm } from 'react-hook-form';
import http from '../../helpers/http';

export default function StoreItem(props) {

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const treatError = error => {
    if (error.response?.data?.message === 'Dados inválidos!') {
      error.response.data.errors.forEach(
        (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
      );
    } else {
      alert('Erro desconhecido!');
    }
  };

  const store = (data) => {
    const parsed = {project_id: props.projectId, ...data};
    http().post('/api/items', parsed)
      .then(() => closeModal())
      .catch(treatError);
  };

  const update = (data) => {
    http().put(`/api/items/${props.item.id}`, data)
      .then(() => closeModal())
      .catch(treatError);
  };

  const subtmitAction = (data) => {
    if (props.item) {
      update(data);
    } else {
      store(data);
    }
  };

  const closeModal = () => {
    reset();
    props.onClose();
  };

  useEffect(() => {
    if (props.isOpen && props.item) {
      setValue('title', props.item.title);
      setValue('description', props.item.description.replace(/<br\s?\/?>/g, '\n'));
    }
  }, [props.isOpen]);

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={closeModal}
      contentLabel="Cadastrar Item"
      style={modalStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Adicionar Item</h2>
          <button type='button' onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Título' error={errors.title?.message}>
          <Input placeholder="Título do item" {...register('title')} />
        </InputField>
        <InputField title='Descrição'>
          <Input
            as="textarea"
            placeholder="Descrição do item"
            {...register('description')}
            style={{minHeight: '73px'}}
          />
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
