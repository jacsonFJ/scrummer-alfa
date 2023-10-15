import { FiAlignJustify, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ImgCircle } from "../Images";
import { BacklogInfo, ItemBlock, ItemContainer } from "./styles";

export function ItemBacklogLarge({ item }) {
  return (
    <ItemContainer>
      <ItemBlock>
        <Link className='item-title' to={`/projetos/${item.id}/item`}>
          {item.title}
        </Link>
        <span className="bottom-line">
          #{item.id} - Criado em {item.created_at}
        </span>
      </ItemBlock>
      <ItemBlock right>
        <BacklogInfo>
          <div className="users-list">
            {item.users.map(user => <ImgCircle size="16px" src={user.picture_url} />)}
          </div>
          <div className="item-notes">
            <FiMessageSquare size={16} />
            {item.comments_count}
          </div>
        </BacklogInfo>
        <span className="bottom-line">
          Alterado em {item.updated_at}
        </span>
      </ItemBlock>
    </ItemContainer>
  );
}

export function ItemBacklogSmall({to}) {
  return (
    <ItemContainer style={{width: '445px'}}>
      <ItemBlock>
        <Link className='item-title' to={to}>
          Este é o título do item do backlog
        </Link>
        <span className="bottom-line">
          #223 - Criado em 22/07/2023 Por Jacon Feuser Joaquim
        </span>
      </ItemBlock>
    </ItemContainer>
  );
}

export function ItemIncrement() {
  return (
    <ItemContainer>
      <ItemBlock>
        <Link className='item-title' to='/projetos/teste/item'>Este é o título do item do backlog</Link>
        <span className="bottom-line">
          #223 - Criado em 22/07/2023 Por Jacon Feuser Joaquim
        </span>
      </ItemBlock>
      <ItemBlock right>
        <BacklogInfo>
          <div className="item-notes">
            <FiAlignJustify size={16} />
            6
          </div>
        </BacklogInfo>
      </ItemBlock>
    </ItemContainer>
  );
}
