import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import Paginator from "../../../Components/Paginator";
import { ItemIncrement } from "../../../Components/ListItems";
import { BacklogList } from "../ProductBacklog/styles";
import { showProject } from "../../../helpers/repositories/projectRepository";
import { listIncrements } from "../../../helpers/repositories/sprintRepository";
import IncrementsFilter from "../../../Components/IncrementsFilter";

export default function IncrementOnSoftware() {

  const defaultFilterData = {
    sort_field: 'end_at',
    sort_direction: 'desc',
  };

  const [filterData, setFilterData] = useState(defaultFilterData);
  const [project, setProject] = useState(null);
  const [sprints, setSprints] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    showProject(id, setProject);
  }, [id]);

  useEffect(() => {
    const params = {
      per_page: 10,
      page,
      ...filterData
    };

    listIncrements(id, params, response => {
      setSprints(response.data);
      setPagination(response.meta);
    });
  }, [id, page, filterData]);

  return (
    <>
      <Navbar />
      {project && (
        <>
          <HeaderProject project={project} setProject={setProject} />
          <BacklogList style={{marginTop: '40px'}}>
            <IncrementsFilter setFilterData={setFilterData} defaultFilterData={defaultFilterData} />
            {sprints.map(sprint => (
              <ItemIncrement key={sprint.id} sprint={sprint} projectId={id} />
            ))}
          </BacklogList>
          {pagination.last_page && (
            <Paginator page={page} pagination={pagination} />
          )}
        </>
      )}
    </>
  );
}
