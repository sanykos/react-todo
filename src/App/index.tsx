import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import 'materialize-css/dist/css/materialize.min.css';
import AddTodos from '../components/AddTodos';
import TodosList from '../components/TodosList';
import { filterItems } from '../utils/filterItems';
import { ITodo } from './interfaces';
import { initialState, VISIBILITY_FILTER } from './constants';
import FilterTodos from '../components/FilterTodos';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [filter, setFilter] = useState<VISIBILITY_FILTER>(VISIBILITY_FILTER.SHOW_ALL);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodoHandler = (value: string): void => {
    if (value.length > 3) {
      setTodos((prev) => [...prev, { title: value, id: prev.length + 1, complete: false }]);
    }
  };

  const changeStatus = (id: number) => {
    if (todos.length > 0) {
      const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
      setTodos(newTodos);
    }
  };

  const filterTodos = (filter: VISIBILITY_FILTER) => {
    setFilter(filter);
  };

  const visibleData = filterItems(todos, filter);

  const total = todos.length;

  return (
    <Container id="App">
      <AddTodos addTodo={addTodoHandler} />
      <TodosList todos={visibleData} total={total} changeStatus={changeStatus} deleteTodo={deleteTodo} />
      <FilterTodos filterTodos={filterTodos} />
    </Container>
  );
};

export default App;
