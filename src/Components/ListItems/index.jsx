import { FiAlignJustify, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ImgCircle } from "../Images";
import { BacklogInfo, ItemBlock, ItemContainer } from "./styles";

export function ItemBacklogLarge({ item, projectId }) {
  return (
    <ItemContainer>
      <ItemBlock>
        <Link className='item-title' to={`/projetos/${projectId}/item/${item.id}`}>
          {item.title}
        </Link>
        <span className="bottom-line">
          #{item.id} - Criado em {item.created_at}
        </span>
      </ItemBlock>
      <ItemBlock right>
        <BacklogInfo>
          <div className="users-list">
            {item.users.map(user => (
              <ImgCircle key={user.id} size="16px" src={user.picture_url} />
            ))}
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

export function ItemBacklogSmall({ item, projectId }) {
  return (
    <ItemContainer style={{width: '445px'}}>
      <ItemBlock>
        <Link className='item-title' to={`/projetos/${projectId}/item/${item.id}`}>
          {item.title}
        </Link>
        <span className="bottom-line">
          #{item.id} - Criado em {item.created_at}
        </span>
      </ItemBlock>
    </ItemContainer>
  );
}

export function ItemIncrement({ sprint, projectId }) {
  return (
    <ItemContainer>
      <ItemBlock>
        <Link className='item-title' to={`/projetos/${projectId}/sprint/${sprint.id}`}>
          {sprint.title}
        </Link>
        <span className="bottom-line">
          #{sprint.id} - Incrementado em {sprint.end_at}
        </span>
      </ItemBlock>
      <ItemBlock right>
        <BacklogInfo>
          <div className="item-notes">
            <FiAlignJustify size={16} />
            {sprint.items_count}
          </div>
        </BacklogInfo>
      </ItemBlock>
    </ItemContainer>
  );
}
