import { VISIBILITY_FILTER } from '../../App/constants';
import { ITodo } from '../../App/interfaces';

export interface IFilterTodos {
  filterTodos: (filter: VISIBILITY_FILTER) => void;
  onSearch: (search: string) => void;
  todos: ITodo[];
  doneCount: number;
  todoCount: number;
}
