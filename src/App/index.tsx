import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import 'materialize-css/dist/css/materialize.min.css';
import AddTodos from '../components/AddTodos';
import TodosList from '../components/TodosList';
import { filterItems } from '../utils/filterItems';
import { ITodo } from './interfaces';
import { initialState, VISIBILITY_FILTER } from './constants';
import FilterTodos from '../components/FilterTodos';
import { searchTodos } from '../utils/searchTodos';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [filter, setFilter] = useState<VISIBILITY_FILTER>(VISIBILITY_FILTER.SHOW_ALL);
  const [search, setSearch] = useState('');

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

  const onSearch = (search: string) => {
    setSearch(search);
  };

  const visibleData = searchTodos(filterItems(todos, filter), search);

  const total = todos.length;

  const doneCount = todos.filter(({ complete }) => complete).length;

  const todoCount = total - doneCount;

  return (
    <Container id="App">
      <AddTodos addTodo={addTodoHandler} />
      <TodosList todos={visibleData} total={total} changeStatus={changeStatus} deleteTodo={deleteTodo} />
      <FilterTodos
        todos={todos}
        filterTodos={filterTodos}
        onSearch={onSearch}
        doneCount={doneCount}
        todoCount={todoCount}
      />
    </Container>
  );
};

export default App;
