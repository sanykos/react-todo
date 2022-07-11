import React from 'react';
import { List, ListItem, ButtonGroup, Button, TextField, Grid } from '@material-ui/core';
import { Delete, Done } from '@material-ui/icons';
import { ITodo, VISIBILITY_FILTER } from '../model/interfaces';
import AddTodos from '../../components/AddTodos';
import { ITodosHandlers } from './interfaces';

const TodosView: React.FC<{
  todos: ITodo[];
  handlers: ITodosHandlers;
  anotherProps: { totalCount: number; doneCount: number; todoCount: number };
}> = ({ todos, handlers, anotherProps }) => {
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
      <Grid container style={{ marginTop: '10px' }}>
        <Grid item xs={4}>
          <ButtonGroup variant="contained" size="large" aria-label="large button group">
            <Button onClick={() => handlers.setFilter(VISIBILITY_FILTER.SHOW_ALL)}>
              All {anotherProps.totalCount}{' '}
            </Button>
            <Button onClick={() => handlers.setFilter(VISIBILITY_FILTER.COMPLETED)}>
              completed {anotherProps.doneCount}
            </Button>
            <Button onClick={() => handlers.setFilter(VISIBILITY_FILTER.ACTIVE)}>
              active {anotherProps.todoCount}{' '}
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth onChange={handlers.searchHandler} placeholder="search todo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodosView;
