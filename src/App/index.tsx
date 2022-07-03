import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@material-ui/core';
import AddTodos from '../components/AddTodos';
import TodosList from '../components/TodosList';
import FilterTodos from '../components/FilterTodos';
import { filterTodos } from '../utils/filterTodos';
import { searchTodos } from '../utils/searchTodos';
import { ITodo } from './interfaces';
import { initialState, VISIBILITY_FILTER } from './constants';
import { TodosModelView } from '../Todos/modelView/TodosModelView';
import { TodosModel } from '../Todos/model/TodosModel';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [filter, setFilter] = useState<VISIBILITY_FILTER>(VISIBILITY_FILTER.SHOW_ALL);
  const [search, setSearch] = useState('');

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodoHandler = (value: string): void => {
    setTodos((prev) => [...prev, { title: value, id: uuidv4(), complete: false }]);
  };

  const changeStatus = (id: string) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
    setTodos(newTodos);
  };

  const filterType = (filter: VISIBILITY_FILTER) => {
    setFilter(filter);
  };

  const onSearch = (search: string) => {
    setSearch(search);
  };

  const visibleData = searchTodos(filterTodos(todos, filter), search);

  const total = todos.length;

  const doneCount = todos.filter(({ complete }) => complete).length;

  const todoCount = total - doneCount;

  const todosVM = new TodosModelView({ todosModel: new TodosModel([{ id: '1', title: 'title', complete: false }]) });

  return (
    <Container id="App">
      <todosVM.View />
    </Container>
  );
};

export default App;
