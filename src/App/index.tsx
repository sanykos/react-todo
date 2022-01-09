import React, { ChangeEvent, FC, KeyboardEvent, SyntheticEvent, useState } from 'react';
import { List, ListItem, Container } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import 'materialize-css/dist/css/materialize.min.css';

const initialState = [
  {
    id: 1,
    title: 'Task 1',
    status: false,
  },
];

export interface ITodo {
  id: number;
  title: string;
  status: boolean;
}

const App: FC = () => {

  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [value, setValue] = useState('');

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (value.length > 3) {
        setTodos(prev => [...prev, { title: value, id: prev.length + 1, status: false }]);
        setValue('');
      }
    }
  };

  const deleteHandler = (id: number) => {
    return (event: SyntheticEvent) => {
      event.stopPropagation();
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }
  }

  const changeStatusHandler = (id: number) => {
    return () => {
      if (todos.length > 0) {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, status: !todo.status } : todo);
        setTodos(newTodos);
      }
    }
  }

  return (
    <Container id="App">
      <input type="text" value={value} onChange={changeInputHandler} onKeyPress={onKeyPressHandler} />
      <List className="collection with-header">
        <ListItem className="collection-header"><h4>Todos</h4></ListItem>
        {todos.length > 0 && todos.map(todo =>
        (<ListItem key={todo.id}
          onClick={changeStatusHandler(todo.id)}
          className="collection-item"
          style={{ display: 'flex', justifyContent: 'space-between' }}>{todo.title + ' id: ' + todo.id}
          <div className="icons-block">
            {todo.status && (<Done />)}
            <Delete style={{ cursor: 'pointer' }}
              onClick={deleteHandler(todo.id)} /></div></ListItem>))}
      </List>
    </Container >
  )
}

export default App;
