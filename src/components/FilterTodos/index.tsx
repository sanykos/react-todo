import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { IFilterTodos } from './interfaces';
import { VISIBILITY_FILTER } from '../../App/constants';

const FilterTodos = (props: IFilterTodos) => {
  const { filterTodos } = props;

  const filterHandler = (filter: VISIBILITY_FILTER) => {
    return () => filterTodos(filter);
  };
  return (
    <ButtonGroup variant="contained" size="large" aria-label="large button group">
      <Button onClick={filterHandler(VISIBILITY_FILTER.SHOW_ALL)}>All</Button>
      <Button onClick={filterHandler(VISIBILITY_FILTER.COMPLETED)}>completed</Button>
      <Button onClick={filterHandler(VISIBILITY_FILTER.ACTIVE)}>active</Button>
    </ButtonGroup>
  );
};

export default FilterTodos;
