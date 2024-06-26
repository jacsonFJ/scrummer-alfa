import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BacklogContainer, BacklogList } from "./styles";
import { ButtonSuccess } from '../../../Components/Buttons';
import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import ItemsFilter from "../../../Components/ItemsFilter";
import { ItemBacklogLarge } from "../../../Components/ListItems";
import Paginator from '../../../Components/Paginator/index';
import { showProject } from '../../../helpers/repositories/projectRepository';
import { listProductBacklog } from "../../../helpers/repositories/itemRepository";
import StoreItem from "../../../Components/Modals/StoreItem";

export default function ProductBacklog() {
  const defaultFilterData = {
    sort_field: 'created_at',
    sort_direction: 'asc',
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState(defaultFilterData);

  const { id } = useParams();

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => {
    setModalIsOpen(false);
    listProductBacklog(id, {page, ...filterData}, response => {
      setItems(response.data);
      setPagination(response.meta);
    });
  };

  useEffect(() => {
    showProject(id, setProject);
  }, [id]);

  useEffect(() => {
    listProductBacklog(id, {page, ...filterData}, response => {
      setItems(response.data);
      setPagination(response.meta);
    });
  }, [id, page, filterData]);

  return (
    <>
      <Navbar />
      {project && <>
        <HeaderProject project={project} setProject={setProject} />
        <BacklogContainer>
          <ButtonSuccess onClick={openModal}>
            Adicionar Item
          </ButtonSuccess>
          <BacklogList>
            <ItemsFilter setFilterData={setFilterData} defaultFilterData={defaultFilterData} />
            {items.map(item => (
              <ItemBacklogLarge key={item.id} item={item} projectId={project.id} />
            ))}
          </BacklogList>
        </BacklogContainer>
        {pagination.last_page && (
          <Paginator pagination={pagination} page={page} setPage={setPage} />
        )}
        <StoreItem projectId={project.id} isOpen={modalIsOpen} onClose={closeModal} />
      </>}
    </>
  );
}
