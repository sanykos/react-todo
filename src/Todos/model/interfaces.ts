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
  setFilter: Event<VISIBILITY_FILTER>;
};

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHAW_ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}
