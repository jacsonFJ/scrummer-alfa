import { FiSearch } from "react-icons/fi";
import { BsSortDownAlt } from "react-icons/bs";

import { FilterContainer, FilterInput, FilterOrder } from "./styles";

export default function ItemsFilter() {
  return (
    <FilterContainer>
      <FilterInput>
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit">
          <FiSearch size={16} />
        </button>
      </FilterInput>
      <FilterOrder>
        <select>
          <option value="criado em">Criado em</option>
          <option value="alterado em">Alterado em</option>
          <option value="titulo">Título</option>
        </select>
        <button type="button">
          <BsSortDownAlt size={16} />
        </button>
      </FilterOrder>
    </FilterContainer>
  );
}
