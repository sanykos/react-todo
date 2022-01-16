import { ITodo } from '../App/interfaces';
import { VISIBILITY_FILTER } from '../App/constants';

export function filterTodos(todos: ITodo[], filter: VISIBILITY_FILTER) {
  switch (filter) {
    case VISIBILITY_FILTER.ACTIVE:
      return todos.filter(({ complete }) => !complete);
    case VISIBILITY_FILTER.COMPLETED:
      return todos.filter(({ complete }) => complete);
    case VISIBILITY_FILTER.SHOW_ALL:
    default:
      return todos;
  }
}
