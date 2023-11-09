import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { Profile1, UserItem, UserOptions, UsersContainer, UsersList } from './styles';
import { ButtonSuccess } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import InputSelect from '../../../Components/Forms/InputSelect';
import { ButtonTrash } from '../../../Components/Buttons';
import { changeUserRole, listProjectUsers, removeUserFromProject, showProject } from '../../../helpers/repositories/projectRepository';
import InviteUserToProject from '../../../Components/Modals/InviteUserToProject';

export default function ProjectUsers() {

  const [project, setProject] = useState(null);
  const [users, setUsers] = useState([]);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const { id } = useParams();

  const onChangeUserRole = (event, userId) => changeUserRole(id, userId, event.target.value);

  const onRemoveUser = userId => {
    removeUserFromProject(
      id,
      userId,
      () => listProjectUsers(id, setUsers)
    );
  };
  
  useEffect(() => {
    showProject(id, setProject);
    listProjectUsers(id, setUsers);
  }, [id]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} setProject={setProject} />
          <UsersContainer>
            <ButtonSuccess onClick={() => setIsInviteModalOpen(true)}>
              Adicionar Participante
            </ButtonSuccess>
            <UsersList>
              {users.map(user => (
                <UserItem key={user.id}>
                  <Profile1>
                    <ImgCircle size="55px" src={user.picture_url} />
                    <div className='profile-2'>
                      <span className='user-name'>
                        {user.name}
                      </span>
                      <div className='profile-3'>
                        <span>{user.sprint_count} Sprint Backlog</span>
                        <span>{user.increment_count} Increments on Software</span>
                      </div>
                    </div>
                  </Profile1>
                  <UserOptions>
                    <InputSelect
                      defaultValue={user.role_id}
                      onChange={event => onChangeUserRole(event, user.id)}
                    >
                      <option value="1">Product Owner</option>
                      <option value="2">Scrum Master</option>
                      <option value="3">Developer</option>
                    </InputSelect>
                    <ButtonTrash onClick={() => onRemoveUser(user.id)} />
                  </UserOptions>
                </UserItem>
              ))}
            </UsersList>
            <InviteUserToProject
              isOpen={isInviteModalOpen}
              closeModal={() => setIsInviteModalOpen(false)}
              projectId={id}
            />
          </UsersContainer>
        </>
      )}
    </>
  );
}
