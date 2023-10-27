import { FiSearch } from "react-icons/fi";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { FilterContainer, FilterInput, FilterOrder } from "./ItemsFilter/styles";

export default function IncrementsFilter({ setFilterData, defaultFilterData }) {
  const {register, handleSubmit, watch} = useForm({
    defaultValues: defaultFilterData,
  });

  const sortDirection = watch('sort_direction');

  const submitAction = data => {
    const filterData = {...data};
    if (!data.search)
      delete filterData.search;
    setFilterData(filterData);
  };

  useEffect(() => {
    // Escuta quando um dos campos de ordenação é alterado
    const subscription = watch((data, { name }) => {
      if (name !== 'search')
        submitAction(data);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FilterContainer onSubmit={handleSubmit(submitAction)}>
      <FilterInput>
        <input type="text" placeholder="Pesquisar..." {...register('search')} />
        <button type="submit">
          <FiSearch size={16} />
        </button>
      </FilterInput>
      <FilterOrder>
        <select {...register('sort_field')}>
          <option value="end_at">Incrementado</option>
          <option value="title">Título</option>
        </select>
        {sortDirection === 'asc' ? (
          <label htmlFor="direction-desc">
            <BsSortDownAlt size={16} />
          </label>
        ) : (
          <label htmlFor="direction-asc">
            <BsSortUpAlt size={16} />
          </label>
        )}
        <input {...register('sort_direction')} type="radio" id="direction-asc" value="asc" />
        <input {...register('sort_direction')} type="radio" id="direction-desc" value="desc" />
      </FilterOrder>
    </FilterContainer>
  );
}
