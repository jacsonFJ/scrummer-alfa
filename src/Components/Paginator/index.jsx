import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

import { ButtonNumberPaginator, ButtonTextPaginator, PaginatorLine } from "./styles";

export default function Paginator({ pagination, page, setPage }) {
  const [buttons, setButtons] = useState([1]);

  useEffect(() => {
    if (pagination.last_page <= 1) {
      setButtons([1]);
      return;
    }

    if (pagination.last_page < 5) {
      const aux = [];
      for (let i = 1; i <= pagination.last_page; i++) {
        aux.push(i);
      }
      setButtons(aux);
      return;
    }

    if (page === 1) {
      setButtons([1, 2, pagination.last_page]);
    }
    else if (page === pagination.last_page) {
      setButtons([1, pagination.last_page - 1, pagination.last_page]);
    }
    else {
      setButtons([1, page, pagination.last_page]);
    }

  }, [page]);

  return (
    <PaginatorLine>
      <ButtonTextPaginator onClick={() => setPage(page - 1)} disabled={page <= 1}>
        <FiChevronLeft size={16} />
        Anterior
      </ButtonTextPaginator>
      {buttons.map(buttonPage => (
        <ButtonNumberPaginator onClick={() => setPage(buttonPage)} checked={buttonPage === page}>
          {buttonPage}
        </ButtonNumberPaginator>
      ))}
      <ButtonTextPaginator onClick={() => setPage(page + 1)} disabled={page >= pagination.last_page}>
        Próximo
        <FiChevronRight size={16} />
      </ButtonTextPaginator>
    </PaginatorLine>
  );
}
