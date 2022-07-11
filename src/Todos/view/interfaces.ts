import { VISIBILITY_FILTER } from '../model/interfaces';

export interface ITodosHandlers {
  addTodo: (title: string) => void;
  changeStatus: (id: string) => void;
  removeTodo: (id: string) => void;
  setFilter: (filter: VISIBILITY_FILTER) => void;
}
