import { useEffect, useState } from "react";

import http from '../../helpers/http';
import ProjectsListTemplate from "./ProjectListTemplate";

export default function ProjectListMine() {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  const loadList = () => {
    http()
      .get('/api/projects/mine', {
        params: {
          per_page: 5,
          page
        }
      })
      .then(response => {
        setProjects(response.data.data);
        setPagination(response.data.meta);
      });
  };

  useEffect(() => {
    loadList();
  }, [page]);

  return (
    <ProjectsListTemplate
      projects={projects}
      pagination={pagination}
      page={page}
      setPage={setPage}
      onNewProject={loadList}
    />
  );
}
