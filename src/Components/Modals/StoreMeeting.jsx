import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../ModalComponents";
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ButtonSuccess } from '../Buttons';
import http from '../../helpers/http';
import InputSelect from '../Forms/InputSelect';
import InputDateTime from '../Forms/InputDateTime';

export default function StoreMeeting(props) {

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const subtmitAction = (data) => {
    const parsed = data;
    if (parsed.start_at instanceof Date)
      parsed.start_at = format(parsed.start_at, 'dd/MM/yyyy HH:mm');
    parsed.project_id = props.sprint.project_id;
    parsed.sprint_id = props.sprint.id;

    http().post('/api/meetings', parsed)
      .then(() => props.onSuccess())
      .catch(error => {
        const message = error.response?.data?.message;
        if (message === 'Dados inválidos!') {
          error.response.data.errors.forEach(
            (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
          );
        } else {
          alert('Erro desconhecido!');
        }
      });
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Registrar Reunião"
      style={modalStyles}
    >
      <ModalForm onSubmit={handleSubmit(subtmitAction)}>
        <ModalHeader>
          <h2>Registrar Reunião</h2>
          <button onClick={props.closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Tipo' error={errors.type_id?.message}>
          <InputSelect {...register('type_id')}>
            <option value="1">Sprint Planning</option>
            <option value="2">Daily Scrum</option>
            <option value="3">Sprint Review</option>
            <option value="4">Sprint Retrospective</option>
          </InputSelect>
        </InputField>
        <div className='form-row'>
          <InputField title='Iniciado em' error={errors.start_at?.message}>
            <InputDateTime control={control} name='start_at' />
          </InputField>
          <InputField title='Duração (minutos)' error={errors.duration?.message}>
            <Input type='number' {...register('duration')} />
          </InputField>
        </div>
        <InputField title="Descrição" error={errors.description?.message}>
          <Input
            as="textarea"
            placeholder="Descrição"
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
