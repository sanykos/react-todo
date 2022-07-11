import { ITodo } from '../Todos/model/interfaces';

export function searchTodos(todos: ITodo[], search: string) {
  if (!search) return todos;
  return todos.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
}
