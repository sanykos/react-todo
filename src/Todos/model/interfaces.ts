import { Event } from 'effector';

export type ITodo = {
  id: string;
  title: string;
  complete: boolean;
};

export type ITodosEvents = {
  addTodo: Event<string>;
  removeTodo: Event<string>;
  changeStatus: Event<string>;
  setFilter: Event<VISIBILITY_FILTER>;
  searchTodos: Event<string>;
};

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHAW_ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}
