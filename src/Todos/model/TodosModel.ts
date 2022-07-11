import { combine, createEvent, createStore, Store } from 'effector';
import { v4 as uuidv4 } from 'uuid';
import { filterTodos } from '../../utils/filterTodos';
import { searchTodos } from '../../utils/searchTodos';
import { ITodo, ITodosEvents, VISIBILITY_FILTER } from './interfaces';

export class TodosModel {
  private $todos: Store<ITodo[]>;

  private $activeFilter: Store<VISIBILITY_FILTER>;

  private $search: Store<string>;

  public events: ITodosEvents;

  constructor(todos: ITodo[]) {
    this.events = {
      addTodo: createEvent(),
      removeTodo: createEvent(),
      changeStatus: createEvent(),
      setFilter: createEvent(),
      searchTodos: createEvent(),
    };

    this.$todos = createStore(todos)
      .on(this.events.addTodo, (state, title) => [...state, { id: uuidv4(), title, complete: false }])
      .on(this.events.removeTodo, (state, id) => state.filter((todo) => todo.id !== id))
      .on(this.events.changeStatus, (state, id) => {
        const newTodos = state.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
        return newTodos;
      });

    this.$search = createStore('').on(this.events.searchTodos, (_, search) => search);

    this.$activeFilter = createStore(VISIBILITY_FILTER.SHOW_ALL).on(this.events.setFilter, (_, filter) => filter);
  }

  getTotalCount(): number {
    return this.$todos.getState().length;
  }

  getDoneCount(): number {
    return this.$todos.getState().filter(({ complete }) => complete).length;
  }

  getTodoCount(): number {
    return this.getTotalCount() - this.getDoneCount();
  }

  getVisibleData(todos: ITodo[], search: string, filter: VISIBILITY_FILTER) {
    return searchTodos(filterTodos(todos, filter), search);
  }

  combineStores() {
    return combine({
      todos: this.$todos,
      activeFilter: this.$activeFilter,
      search: this.$search,
    });
  }
}
