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

    this.View = createComponent(todosModel.combineStores(), (_, content) => (
      <Suspense fallback={<div>Loading</div>}>
        <LazyView todos={content.todos} handlers={handlers} />
      </Suspense>
    ));
  }
}
