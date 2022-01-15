import { ITodo, VISIBILITY_FILTER } from '../App';

export function filterItems(todos: ITodo[], filter: VISIBILITY_FILTER) {
  console.log('filterItems');
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
