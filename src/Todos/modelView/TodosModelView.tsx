import React, { ComponentType, lazy, Suspense } from 'react';
import { createComponent } from 'effector-react';
import { TodosModel } from '../model/TodosModel';
import { ITodosHandlers } from '../view/interfaces';

export class TodosModelView {
  View: ComponentType;

  constructor(props: { todosModel: TodosModel }) {
    const { todosModel } = props;
    const LazyView = lazy(() => import('../view/TodosView'));

    const handlers: ITodosHandlers = {
      ...todosModel.events,
    };

    this.View = createComponent(todosModel.combineStores(), (_, { todos, activeFilter }) => {
      const filterTodos = todosModel.filterTodos(todos, activeFilter);
      const totalCount = todosModel.getTotalCount();
      const doneCount = todosModel.getDoneCount();
      const todoCount = todosModel.getTodoCount();
      return (
        <Suspense fallback={<div>Loading</div>}>
          <LazyView todos={filterTodos} handlers={handlers} anotherProps={{ totalCount, doneCount, todoCount }} />
        </Suspense>
      );
    });
  }
}
