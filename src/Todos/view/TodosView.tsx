import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import { ITodo } from '../model/interfaces';
import AddTodos from '../../components/AddTodos';
import { ITodosHandlers } from './interfaces';

const TodosView: React.FC<{ todos: ITodo[]; handlers: ITodosHandlers }> = ({ todos, handlers }) => {
  console.log('todos', todos);
  return (
    <div className="TODOS">
      <AddTodos addTodo={handlers.addTodo} />
      <List className="collection with-header" style={{ marginTop: '10px' }}>
        <ListItem className="collection-header">
          <h4>Todos</h4>
        </ListItem>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => handlers.changeStatus(todo.id)}
            className="collection-item"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              border: '1px solid #000',
              margin: '5px 0',
            }}
          >
            {todo.title}
            <div className="icons-block">
              {todo.complete && <Done />}
              <Delete style={{ cursor: 'pointer' }} onClick={() => handlers.removeTodo(todo.id)} />
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodosView;
