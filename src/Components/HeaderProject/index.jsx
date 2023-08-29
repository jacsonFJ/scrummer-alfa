import { FaRegFolderClosed } from 'react-icons/fa6';
import { FiActivity, FiAlignJustify, FiCheckSquare, FiList } from 'react-icons/fi';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { styled } from 'styled-components';

import { HeaderBlock, HeaderLink, IconBlock, IconBox, LinksList } from '../Header/styles';
import Colors from '../../Colors';

const BtnDropDown = styled.button`
  padding: 6px;
  color: ${Colors.secondary900};
  border: 1px solid ${Colors.secondary200};
  border-radius: 8px;
  background-color: transparent;
  display: flex;
`;

export default function HeaderProject() {
  return (
    <HeaderBlock>
      <div id="header-container">
        <IconBlock>
          <IconBox>
            <FaRegFolderClosed size={60} />
          </IconBox>
          <h1>Nome do projeto</h1>
          <BtnDropDown>
            <TbTriangleInvertedFilled size={20} />
          </BtnDropDown>
        </IconBlock>
        <LinksList>
          <HeaderLink to="/projetos/detalhes" checked>
            <FiActivity />
            Visão geral
          </HeaderLink>
          <HeaderLink to="/projetos/product-backlog">
            <FiAlignJustify />
            Product Backlog
          </HeaderLink>
          <HeaderLink to="/projetos/sprint-backlog">
            <FiList />
            Sprint Backlog
          </HeaderLink>
          <HeaderLink to="/">
            <FiCheckSquare />
            Increment on Software
          </HeaderLink>
        </LinksList>
      </div>
    </HeaderBlock>
  );
}
