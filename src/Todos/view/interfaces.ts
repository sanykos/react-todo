export interface ITodosHandlers {
  addTodo: (title: string) => void;
  changeStatus: (id: string) => void;
  removeTodo: (id: string) => void;
}
