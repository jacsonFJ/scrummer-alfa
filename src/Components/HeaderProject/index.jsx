import { FaRegFolderClosed } from 'react-icons/fa6';
import { FiActivity, FiAlignJustify, FiCheckSquare, FiList } from 'react-icons/fi';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { HeaderBlock, HeaderLink, IconBlock, IconBox, LinksList } from '../Header/styles';
import Colors from '../../Colors';
import Dropdown from '../Dropdown';
import { DropdownItem } from '../Dropdown/styles';

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
  const location = useLocation();

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
              <Link to='/projetos'>
                Editar Projeto
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={`/projetos/${project.id}/usuarios`}>
                Participantes
              </Link>
            </DropdownItem>
            <DropdownItem>
              <button>
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
    </HeaderBlock>
  );
}
