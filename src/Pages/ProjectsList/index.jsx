import { useEffect, useState } from "react";

import { Header } from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Paginator from "../../Components/Paginator";
import ProjectCard from "../../Components/ProjectCard";
import { ProjectCardList, ProjectCardMargin } from "./styles";
import http from '../../helpers/http';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    http
      .get('/api/projects/in-progress', {
        params: {per_page: 5}
      })
      .then(response => {
        setProjects(response.data.data);
        setPagination(response.data.meta);
      })
      .catch(error => {
        console.error('Erro na lista de projetos');
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <ProjectCardList>
        {projects.map(project => (
          <ProjectCardMargin key={project.id}>
            <ProjectCard project={project} />
          </ProjectCardMargin>
        ))}
      </ProjectCardList>
      {pagination.current_page && <Paginator pagination={pagination} />}
    </>
  );
}
