import { VISIBILITY_FILTER } from '../../App/constants';

export interface IFilterTodos {
  filterTodos: (filter: VISIBILITY_FILTER) => void;
}
