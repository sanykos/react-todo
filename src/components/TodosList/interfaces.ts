import { ITodo } from '../../App/interfaces';

export interface ITodosList {
  todos: ITodo[];
  total: number;
  changeStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
}
