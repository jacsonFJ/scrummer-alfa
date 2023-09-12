import { FaRegFolderClosed } from 'react-icons/fa6';
import { FiCheckSquare, FiClipboard, FiRotateCw } from 'react-icons/fi';

import { HeaderBlock, HeaderLink, IconBlock, IconBox, LinksList } from './styles';
import { useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <HeaderBlock>
      <div id="header-container">
        <IconBlock>
          <IconBox>
            <FaRegFolderClosed size={60} />
          </IconBox>
          <h1>Projetos</h1>
        </IconBlock>
        <LinksList>
          <HeaderLink to="/projetos" checked={location.pathname === '/projetos'}>
            <FiRotateCw />
            Em progresso
          </HeaderLink>
          <HeaderLink to="/projetos-arquivados" checked={location.pathname === '/projetos-arquivados'}>
            <FiCheckSquare />
            Arquivados
          </HeaderLink>
          <HeaderLink to="/meus-projetos" checked={location.pathname === '/meus-projetos'}>
            <FiClipboard />
            Meus Projetos
          </HeaderLink>
        </LinksList>
      </div>
    </HeaderBlock>
  );
}
