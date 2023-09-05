import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { PaginatorSmallLine } from "./styles";
import { ButtonTextPaginator } from "../Paginator/styles";

export default function PaginatorSmall() {
  return (
    <PaginatorSmallLine>
      <ButtonTextPaginator to="/projetos">
        <FiChevronLeft />
        Anterior
      </ButtonTextPaginator>
      <ButtonTextPaginator to="/projetos">
        Próximo
        <FiChevronRight />
      </ButtonTextPaginator>
    </PaginatorSmallLine>
  );
}
