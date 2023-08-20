import { FaRegFolderClosed } from 'react-icons/fa6';
import { FiCheckSquare, FiClipboard, FiRotateCw } from 'react-icons/fi';

import { HeaderBlock, HeaderLink, IconBlock, LinksList } from './styles';

export function Header() {
  return (
    <HeaderBlock>
      <div id="header-container">
        <IconBlock>
          <div>
            <FaRegFolderClosed />
          </div>
          <h1>Projetos</h1>
        </IconBlock>
        <LinksList>
          <HeaderLink to="/" checked>
            <FiRotateCw />
            Em progresso
          </HeaderLink>
          <HeaderLink to="/">
            <FiCheckSquare />
            Arquivados
          </HeaderLink>
          <HeaderLink to="/">
            <FiClipboard />
            Meus Projetos
          </HeaderLink>
        </LinksList>
      </div>
    </HeaderBlock>
  );
}
