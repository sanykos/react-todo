import { Event } from 'effector';

export type ITodo = {
  id: string;
  title: string;
  complete: boolean;
};

export type ITodosEvents = {
  setTodos: Event<ITodo[]>;
  addTodo: Event<string>;
  removeTodo: Event<string>;
  changeStatus: Event<string>;
};
