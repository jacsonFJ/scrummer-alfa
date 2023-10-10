import { useState } from "react";
import ReactModal from "react-modal";

import { ButtonSuccess } from "../../Components/Buttons";
import { Header } from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Paginator from "../../Components/Paginator";
import ProjectCard from "../../Components/ProjectCard";
import { ModalHeader, modalStyles } from "../Project/SprintBacklog/styles";
import { LineButton, ProjectCardList, ProjectCardMargin } from "./styles";
import { FiX } from "react-icons/fi";
import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import Colors from "../../Colors";
import InputTextArea from '../../Components/Forms/InputTextArea';

export default function ProjectsListTemplate(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
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
        <ModalHeader>
          <h2>Adicionar Novo Projeto</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Título'>
          <Input placeholder="Título do Projeto" />
        </InputField>
        <InputField title='Descrição'>
          <InputTextArea placeholder="Descrição do projeto" style={{minHeight: '73px'}} />
        </InputField>
        <hr
          style={{
            width: '100%',
            height: '1px',
            marginTop: '20px',
            marginBottom: '0px',
            backgroundColor: Colors.secondary200,
            border: 'none',
          }}
        />
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ButtonSuccess>
            Salvar
          </ButtonSuccess>
        </div>
      </ReactModal>
    </>
  );
}
