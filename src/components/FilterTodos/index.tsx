import React, { ChangeEvent } from 'react';
import { ButtonGroup, Button, TextField, Grid } from '@material-ui/core';
import { IFilterTodos } from './interfaces';
import { VISIBILITY_FILTER } from '../../App/constants';

const FilterTodos = (props: IFilterTodos) => {
  const { filterTodos, onSearch, doneCount, todoCount } = props;

  const filterHandler = (filter: VISIBILITY_FILTER) => {
    return () => filterTodos(filter);
  };

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <ButtonGroup variant="contained" size="large" aria-label="large button group">
          <Button onClick={filterHandler(VISIBILITY_FILTER.SHOW_ALL)}>All</Button>
          <Button onClick={filterHandler(VISIBILITY_FILTER.COMPLETED)}>completed {doneCount}</Button>
          <Button onClick={filterHandler(VISIBILITY_FILTER.ACTIVE)}>active {todoCount}</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={8}>
        <TextField fullWidth onChange={onSearchHandler} />
      </Grid>
    </Grid>
  );
};

export default FilterTodos;
