import { ITodo } from '../../App/interfaces';

export interface ITodosList {
  todos: ITodo[];
  changeStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}
