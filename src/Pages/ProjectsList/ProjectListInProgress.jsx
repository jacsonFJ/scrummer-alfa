import { useEffect, useState } from "react";

import http from '../../helpers/http';
import ProjectsListTemplate from "./ProjectListTemplate";

export default function ProjectListInProgress() {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    http()
      .get('/api/projects/in-progress', {
        params: {
          per_page: 5,
          page
        }
      })
      .then(response => {
        setProjects(response.data.data);
        setPagination(response.data.meta);
      })
      .catch(error => {
        console.error('Erro na lista de projetos');
        console.error(error);
      });
  }, [page]);

  return (
    <ProjectsListTemplate
      projects={projects}
      pagination={pagination}
      page={page}
      setPage={setPage}
    />
  );
}
