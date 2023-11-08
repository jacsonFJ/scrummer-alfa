import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from '../ModalComponents';
import { ButtonSuccess } from '../Buttons';
import { useForm } from 'react-hook-form';
import http from '../../helpers/http';

export default function StoreItem(props) {
  const navigate = useNavigate();

  const formParams = {};
  if (props.item) {
    formParams.defaultValues = {
      title: props.item.title,
      description: props.item.description.replace(/<br\s?\/?>/g, '\n'),
    };
  }
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm(formParams);

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
      .then(() => props.closeModal())
      .catch(treatError);
  };

  const update = (data) => {
    http().put(`/api/items/${props.item.id}`, data)
      .then(() => props.closeModal())
      .catch(treatError);
  };

  const subtmitAction = (data) => {
    if (props.item) {
      update(data);
    } else {
      store(data);
    }
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Cadastrar Item"
      style={modalStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Adicionar Item</h2>
          <button onClick={props.closeModal}>
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
