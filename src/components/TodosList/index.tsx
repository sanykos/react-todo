import React, { SyntheticEvent } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import { ITodosList } from './interfaces';

const TodosList = (props: ITodosList) => {
  const { todos, changeStatus, deleteTodo } = props;

  const changeStatusHandler = (id: string) => {
    return () => changeStatus(id);
  };

  const deleteTodoHandler = (id: string) => {
    return (event: SyntheticEvent) => {
      event.stopPropagation();
      deleteTodo(id);
    };
  };

  return (
    <List className="collection with-header" style={{ marginTop: '10px' }}>
      <ListItem className="collection-header">
        <h4>Todos</h4>
      </ListItem>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          onClick={changeStatusHandler(todo.id)}
          className="collection-item"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
            borderBottom: '1px solid #000',
          }}
        >
          {todo.title}
          <div className="icons-block">
            {todo.complete && <Done />}
            <Delete style={{ cursor: 'pointer' }} onClick={deleteTodoHandler(todo.id)} />
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TodosList;
