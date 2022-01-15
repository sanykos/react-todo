import React, { SyntheticEvent } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import { ITodosList } from './interfaces';

const TodosList = (props: ITodosList) => {
  const { todos, total, changeStatus, deleteTodo } = props;

  const changeStatusHandler = (id: number) => {
    return () => changeStatus(id);
  };

  const deleteTodoHandler = (id: number) => {
    return (event: SyntheticEvent) => {
      event.stopPropagation();
      deleteTodo(id);
    };
  };

  return (
    <List className="collection with-header">
      <ListItem className="collection-header">
        <h4>Todos (Total: {total})</h4>
      </ListItem>
      {todos.map((todo) => (
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
            <Delete style={{ cursor: 'pointer' }} onClick={deleteTodoHandler(todo.id)} />
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TodosList;
