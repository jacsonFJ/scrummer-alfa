import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import { useForm } from 'react-hook-form';
import http from '../../helpers/http';

export default function StoreSprint(props) {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const subtmitAction = (data) => {
    http.post(`/api/projects/${props.projectId}/sprints`, data)
      .then(response => props.onSuccess(response.data.data))
      .catch(error => {
        const message = error.response?.data?.message;
        if (message === 'Dados inválidos!') {
          error.response.data.errors.forEach(
            (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
          );
        } else if (message) {
          alert(message);
        } else {
          alert('Erro desconhecido!');
        }
      });
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Iniciar Sprint"
      style={modalStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Iniciar Nova Sprint</h2>
          <button onClick={props.closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Título' error={errors.title?.message}>
          <Input placeholder="Título da Sprint" {...register('title')} />
        </InputField>
        <InputField title='Iniciado em' error={errors.start_at?.message}>
          <Input placeholder="dd/mm/aaaa" style={{width: '300px'}} {...register('start_at')} />
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
