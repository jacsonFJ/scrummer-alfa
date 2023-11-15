import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import http from '../../helpers/http';
import InputDate from '../Forms/InputDate';
import { format } from 'date-fns';

export default function StoreSprint(props) {

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const subtmitAction = (data) => {
    const parsed = data;
    if (parsed.start_at instanceof Date)
      parsed.start_at = format(parsed.start_at, 'dd/MM/yyyy');

    http().post(`/api/projects/${props.projectId}/sprints`, parsed)
      .then(response => {
        reset();
        props.onSuccess(response.data.data);
      })
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
          <InputDate control={control} name='start_at' />
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
