import { FiBookOpen } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Description, DescriptionText, DescriptionTitle, ItemsList, Participants, ProjectContainer, SectionTitle } from "./styles";
import Navbar from '../../../Components/Navbar/index';
import { ImgCircle } from '../../../Components/Images';
import { TagBlue } from '../../../Components/Tags';
import Colors from '../../../Colors';
import HeaderProject from '../../../Components/HeaderProject';
import { showProject } from '../../../helpers/repositories/projectRepository';

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    showProject(id, setProject);
  }, [id]);

  return (
    <>
      <Navbar />
      {project && <>
        <HeaderProject project={project} setProject={setProject} />
        <ProjectContainer>
          <Description>
            <DescriptionTitle>
              <FiBookOpen size={20} />
              Descrição
            </DescriptionTitle>
            <DescriptionText dangerouslySetInnerHTML={{__html: project.description}} />
          </Description>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Participants>
              <SectionTitle to={`/projetos/${id}/usuarios`}>
                Participantes
              </SectionTitle>
              {project.users.map(user => (
                <div key={user.id} className='participant'>
                  <div className='participant-name'>
                    <ImgCircle size="34px" src={user.picture_url} />
                    <span >{user.name}</span>
                  </div>
                  <TagBlue>{user.role}</TagBlue>
                </div>
              ))}
            </Participants>
            <Participants style={{borderBottom: `1px solid ${Colors.secondary200}`}}>
              <SectionTitle to="#">
                Últimos Itens
              </SectionTitle>
              <ItemsList>
                {project.last_items.map(item => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ItemsList>
            </Participants>
          </div>
        </ProjectContainer>
      </>}
    </>
  );
}
