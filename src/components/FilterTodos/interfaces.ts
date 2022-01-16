import { VISIBILITY_FILTER } from '../../App/constants';

export interface IFilterTodos {
  filterType: (filter: VISIBILITY_FILTER) => void;
  onSearch: (search: string) => void;
  total: number;
  doneCount: number;
  todoCount: number;
}
