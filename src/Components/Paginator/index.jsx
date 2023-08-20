import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ButtonNumberPaginator, ButtonTextPaginator, PaginatorLine } from "./styles";

export default function Paginator() {
  return (
    <PaginatorLine>
      <ButtonTextPaginator to="/projetos">
        <FiChevronLeft />
        Anterior
      </ButtonTextPaginator>
      <ButtonNumberPaginator to="/projetos" checked>1</ButtonNumberPaginator>
      <ButtonNumberPaginator to="/projetos">2</ButtonNumberPaginator>
      <ButtonNumberPaginator to="/projetos">3</ButtonNumberPaginator>
      <ButtonTextPaginator to="/projetos">
        Próximo
        <FiChevronRight />
      </ButtonTextPaginator>
    </PaginatorLine>
  );
}
