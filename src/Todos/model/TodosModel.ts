import { combine, createEvent, createStore, Store } from 'effector';
import { v4 as uuidv4 } from 'uuid';
import { ITodo, ITodosEvents } from './interfaces';

export class TodosModel {
  protected $todos: Store<ITodo[]>;

  events: ITodosEvents;

  constructor(todos: ITodo[]) {
    this.events = {
      addTodo: createEvent(),
      setTodos: createEvent(),
      removeTodo: createEvent(),
      changeStatus: createEvent(),
    };

    this.$todos = createStore(todos)
      .on(this.events.setTodos, (_, newTodos) => newTodos)
      .on(this.events.addTodo, (state, title) => [...state, { id: uuidv4(), title, complete: false }])
      .on(this.events.removeTodo, (state, id) => state.filter((todo) => todo.id !== id))
      .on(this.events.changeStatus, (state, id) => {
        const newTodos = state.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
        return newTodos;
      });
  }

  combineStores() {
    return combine({
      todos: this.$todos,
    });
  }
}
