import { FiList } from 'react-icons/fi';

import { CardContainer, CardFooter, CardTitle } from "./styles";
import { TagBlue } from '../Tags';
import { ImgCircle } from "../Images";

export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <CardTitle to="/projetos/teste/detalhes">
        {project.title}
      </CardTitle>
      <p dangerouslySetInnerHTML={{__html: project.description}} />
      <CardFooter>
        <TagBlue>{project.role}</TagBlue>
        <div className="users-list">
          {project.users.map(user => (
            <ImgCircle key={user.id} size="34px" src={user.picture_url} />
          ))}
        </div>
        <div className="sprint-items-count">
          <FiList size={20} />
          <span>{project.items_count}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
