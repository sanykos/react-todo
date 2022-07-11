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
      searchHandler: (e) => todosModel.events.searchTodos(e.target.value),
    };

    this.View = createComponent(todosModel.combineStores(), (_, { todos, activeFilter, search }) => {
      const visibleData = todosModel.getVisibleData(todos, search, activeFilter);
      const totalCount = todosModel.getTotalCount();
      const doneCount = todosModel.getDoneCount();
      const todoCount = todosModel.getTodoCount();
      return (
        <Suspense fallback={<div>Loading</div>}>
          <LazyView todos={visibleData} handlers={handlers} anotherProps={{ totalCount, doneCount, todoCount }} />
        </Suspense>
      );
    });
  }
}
