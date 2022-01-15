import React, { ChangeEvent, FC, KeyboardEvent, SyntheticEvent, useState, useMemo } from 'react';
import { filterItems } from '../utils/filterItems';
import { List, ListItem, Container, ButtonGroup, Button } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import 'materialize-css/dist/css/materialize.min.css';

const initialState = [
  {
    id: 1,
    title: 'Task 1',
    complete: false,
  },
];

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHAW_ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState<VISIBILITY_FILTER>(VISIBILITY_FILTER.SHOW_ALL);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (value.length > 3) {
        setTodos((prev) => [...prev, { title: value, id: prev.length + 1, complete: false }]);
        setValue('');
      }
    }
  };

  const deleteHandler = (id: number) => {
    return (event: SyntheticEvent) => {
      event.stopPropagation();
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    };
  };

  const changeStatusHandler = (id: number) => {
    return () => {
      if (todos.length > 0) {
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
        setTodos(newTodos);
      }
    };
  };

  const filterHandler = (filter: VISIBILITY_FILTER) => {
    return () => {
      setFilter(filter);
    };
  };

  const visibleData = useMemo(() => filterItems(todos, filter), [filter, todos]);

  return (
    <Container id="App">
      <input type="text" value={value} onChange={changeInputHandler} onKeyPress={onKeyPressHandler} />
      <List className="collection with-header">
        <ListItem className="collection-header">
          <h4>Todos</h4>
        </ListItem>
        {visibleData.length > 0 &&
          visibleData.map((todo) => (
            <ListItem
              key={todo.id}
              onClick={changeStatusHandler(todo.id)}
              className="collection-item"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {todo.title}
              <div className="icons-block">
                {todo.complete && <Done />}
                <Delete style={{ cursor: 'pointer' }} onClick={deleteHandler(todo.id)} />
              </div>
            </ListItem>
          ))}
      </List>
      <ButtonGroup variant="contained" size="large" aria-label="large button group">
        <Button onClick={filterHandler(VISIBILITY_FILTER.SHOW_ALL)}>All</Button>
        <Button onClick={filterHandler(VISIBILITY_FILTER.COMPLETED)}>completed</Button>
        <Button onClick={filterHandler(VISIBILITY_FILTER.ACTIVE)}>active</Button>
      </ButtonGroup>
    </Container>
  );
};

export default App;
