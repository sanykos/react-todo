import { combine, createEvent, createStore, Store } from 'effector';
import { v4 as uuidv4 } from 'uuid';
import { ITodo, ITodosEvents, VISIBILITY_FILTER } from './interfaces';

export class TodosModel {
  private $todos: Store<ITodo[]>;

  private $activeFilter: Store<VISIBILITY_FILTER>;

  public events: ITodosEvents;

  constructor(todos: ITodo[]) {
    this.events = {
      addTodo: createEvent(),
      setTodos: createEvent(),
      removeTodo: createEvent(),
      changeStatus: createEvent(),
      setFilter: createEvent(),
    };

    this.$todos = createStore(todos)
      .on(this.events.setTodos, (_, newTodos) => newTodos)
      .on(this.events.addTodo, (state, title) => [...state, { id: uuidv4(), title, complete: false }])
      .on(this.events.removeTodo, (state, id) => state.filter((todo) => todo.id !== id))
      .on(this.events.changeStatus, (state, id) => {
        const newTodos = state.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
        return newTodos;
      });
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

  filterTodos(todos: ITodo[], filter: VISIBILITY_FILTER) {
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

  combineStores() {
    return combine({
      todos: this.$todos,
      activeFilter: this.$activeFilter,
    });
  }
}
