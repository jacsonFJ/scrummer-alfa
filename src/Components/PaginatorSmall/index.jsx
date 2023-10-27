import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { PaginatorSmallLine } from "./styles";
import { ButtonTextPaginator } from "../Paginator/styles";

export default function PaginatorSmall({ pagination, page, setPage }) {
  return (
    <PaginatorSmallLine>
      <ButtonTextPaginator onClick={() => setPage(page - 1)} disabled={page <= 1}>
        <FiChevronLeft />
        Anterior
      </ButtonTextPaginator>
      <ButtonTextPaginator onClick={() => setPage(page + 1)} disabled={page >= pagination.last_page}>
        Próximo
        <FiChevronRight />
      </ButtonTextPaginator>
    </PaginatorSmallLine>
  );
}
