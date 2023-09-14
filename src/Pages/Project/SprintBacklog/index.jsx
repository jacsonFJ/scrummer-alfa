import { Link } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";
import { FiX } from "react-icons/fi";

import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import { BacklogContainer, BacklogList } from '../ProductBacklog/styles';
import Paginator from '../../../Components/Paginator/index';
import { ButtonDanger, ButtonSuccess } from "../../../Components/Buttons";
import ItemsFilter from '../../../Components/ItemsFilter/index';
import { ItemBacklogLarge } from '../../../Components/ListItems/index';
import { ModalHeader, NoSprint, TitleRow, modalStyles } from "./styles";
import InputField from '../../../Components/Forms/InputField';
import { Input } from '../../../Components/Forms/InputText';
import Colors from "../../../Colors";

export default function SprintBacklog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Navbar />
      <HeaderProject />
      {true ? (
        <BacklogContainer>
          <ButtonSuccess onClick={openModal}>
            Iniciar Sprint
          </ButtonSuccess>
          <NoSprint>
            Não há Sprint em andamento
          </NoSprint>
        </BacklogContainer>
      ) : (
        <>
          <BacklogContainer>
            <TitleRow>
              <Link to="/projetos/teste/sprint">
                Sprint #9 - Título da sprint
              </Link>
              <ButtonDanger>
                Encerrar Sprint
              </ButtonDanger>
            </TitleRow>
            <BacklogList>
              <ItemsFilter />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
              <ItemBacklogLarge />
            </BacklogList>
          </BacklogContainer>
          <Paginator />
        </>
      )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Iniciar Sprint"
        style={modalStyles}
      >
        <ModalHeader>
          <h2>Iniciar Nova Sprint</h2>
          <button onClick={closeModal}>
            <FiX size={24} />
          </button>
        </ModalHeader>
        <InputField title='Título'>
          <Input placeholder="Título da Sprint" />
        </InputField>
        <InputField title='Iniciado em'>
          <Input placeholder="dd/mm/aaaa" style={{width: '300px'}} />
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
