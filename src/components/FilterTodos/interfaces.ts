import { VISIBILITY_FILTER } from '../../App/constants';
import { ITodo } from '../../App/interfaces';

export interface IFilterTodos {
  filterType: (filter: VISIBILITY_FILTER) => void;
  onSearch: (search: string) => void;
  todos: ITodo[];
  doneCount: number;
  todoCount: number;
}
