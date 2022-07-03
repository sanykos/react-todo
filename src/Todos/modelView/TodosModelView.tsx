import React, { ComponentType, lazy, Suspense } from 'react';
import { createComponent } from 'effector-react';
import { TodosModel } from '../model/TodosModel';

export class TodosModelView {
  View: ComponentType;

  constructor(props: { todosModel: TodosModel }) {
    const { todosModel } = props;
    const LazyView = lazy(() => import('../view/TodosView'));

    this.View = createComponent(todosModel.combineStores(), (_, content) => (
      <Suspense fallback={<div>Loading</div>}>
        <LazyView todos={content.todos} />
      </Suspense>
    ));
  }
}
