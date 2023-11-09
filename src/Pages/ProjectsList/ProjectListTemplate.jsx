import { useState } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";

import { ButtonSuccess } from "../../Components/Buttons";
import { Header } from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Paginator from "../../Components/Paginator";
import ProjectCard from "../../Components/ProjectCard";
import { LineButton, ProjectCardList, ProjectCardMargin } from "./styles";
import { FiX } from "react-icons/fi";
import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from "../../Components/ModalComponents";
import http from '../../helpers/http';

export default function ProjectsListTemplate(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const subtmitAction = (data) => {
    http().post('/api/projects', data)
      .then(() => {
        closeModal();
        props.onNewProject();
      })
      .catch(error => {
        if (error.response?.data?.message === 'Dados inválidos!') {
          error.response.data.errors.forEach(
            (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
          );
        } else {
          alert('Erro desconhecido!');
        }
      });
  };

  return (
    <>
      <Navbar />
      <Header />
      <LineButton>
        <ButtonSuccess onClick={openModal}>
          Adicionar Novo Projeto
        </ButtonSuccess>
      </LineButton>
      <ProjectCardList>
        {props.projects.map(project => (
          <ProjectCardMargin key={project.id}>
            <ProjectCard project={project} />
          </ProjectCardMargin>
        ))}
      </ProjectCardList>
      {props.pagination.current_page && (
        <Paginator {...props} />
      )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Novo Projeto"
        style={modalStyles}
      >
        <ModalForm onSubmit={handleSubmit(subtmitAction)}>
          <ModalHeader>
            <h2>Adicionar Novo Projeto</h2>
            <button onClick={closeModal}>
              <FiX size={24} />
            </button>
          </ModalHeader>
          <InputField title='Título' error={errors.title?.message}>
            <Input placeholder="Título do Projeto" {...register('title')} />
          </InputField>
          <InputField title='Descrição'>
            <Input
              as="textarea"
              placeholder="Descrição do projeto"
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
    </>
  );
}
