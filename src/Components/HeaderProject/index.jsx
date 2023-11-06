import { FaRegFolderClosed } from 'react-icons/fa6';
import { FiActivity, FiAlignJustify, FiCheckSquare, FiList, FiX } from 'react-icons/fi';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { styled } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

import { HeaderBlock, HeaderLink, IconBlock, IconBox, LinksList } from '../Header/styles';
import Colors from '../../Colors';
import Dropdown from '../Dropdown';
import { DropdownItem } from '../Dropdown/styles';
import InputField from '../Forms/InputField';
import { Input } from '../Forms/InputText';
import { ModalForm, ModalHeader, ModalSeparator, modalStyles } from '../ModalComponents';
import { ButtonSuccess } from '../Buttons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import http from '../../helpers/http';

const BtnDropDown = styled(Dropdown)`
  padding: 6px;
  color: ${Colors.secondary900};
  border: 1px solid ${Colors.secondary200};
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  cursor: pointer;
`;

export default function HeaderProject({ project }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const subtmitAction = (data) => {
    http().put(`/api/projects/${project.id}`, data)
      .then(() => closeModal())
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

  const destroyAction = () => {
    http().delete(`/api/projects/${project.id}`)
      .then(() => navigate('/projetos'))
      .catch(() => alert('Erro desconhecido!'));
  };

  return (
    <HeaderBlock>
      <div id="header-container">
        <IconBlock>
          <IconBox>
            <FaRegFolderClosed size={60} />
          </IconBox>
          <h1>{project.title}</h1>
          <BtnDropDown
            buttonContent={<TbTriangleInvertedFilled size={16} />}
          >
            <DropdownItem>
              <button onClick={openModal}>
                Editar Projeto
              </button>
            </DropdownItem>
            <DropdownItem>
              <Link to={`/projetos/${project.id}/usuarios`}>
                Participantes
              </Link>
            </DropdownItem>
            <DropdownItem>
              <button onClick={destroyAction}>
                Arquivar Projeto
              </button>
            </DropdownItem>
          </BtnDropDown>
        </IconBlock>
        <LinksList>
          <HeaderLink
            to={`/projetos/${project.id}/detalhes`}
            checked={location.pathname.match(/^\/projetos\/.*\/detalhes$/)}
          >
            <FiActivity />
            Visão geral
          </HeaderLink>
          <HeaderLink
            to={`/projetos/${project.id}/product-backlog`}
            checked={location.pathname.match(/^\/projetos\/.*\/product-backlog$/)}
          >
            <FiAlignJustify />
            Product Backlog
          </HeaderLink>
          <HeaderLink
            to={`/projetos/${project.id}/sprint-backlog`}
            checked={location.pathname.match(/^\/projetos\/.*\/sprint-backlog$/)}
          >
            <FiList />
            Sprint Backlog
          </HeaderLink>
          <HeaderLink
            to={`/projetos/${project.id}/increment-on-software`}
            checked={location.pathname.match(/^\/projetos\/.*\/increment-on-software$/)}
          >
            <FiCheckSquare />
            Increment on Software
          </HeaderLink>
        </LinksList>
      </div>
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
            <Input
              placeholder="Título do Projeto"
              {...register('title', {value: project.title})}
            />
          </InputField>
          <InputField title='Descrição'>
            <Input
              as="textarea"
              placeholder="Descrição do projeto"
              {...register('description', {value: project.description})}
              style={{minHeight: '73px'}}
            >
            </Input>
          </InputField>
          <ModalSeparator />
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <ButtonSuccess type="submit">
              Salvar
            </ButtonSuccess>
          </div>
        </ModalForm>
      </ReactModal>
    </HeaderBlock>
  );
}
