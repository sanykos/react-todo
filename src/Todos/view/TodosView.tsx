import React from 'react';
import { ITodo } from '../model/interfaces';

const TodosView: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  console.log('todos', todos);
  return <div>TodosView</div>;
};

export default TodosView;
