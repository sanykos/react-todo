import React from 'react';
import { v4 as uuid } from 'uuid';
import { ComponentStory } from '@storybook/react';
import { TodosModel } from '../model/TodosModel';
import { TodosModelView } from '../modelView/TodosModelView';

export default {
  title: 'Todos',
};

const todosInstance = new TodosModel([{ id: uuid(), title: 'title', complete: false }]);

const TodosView = new TodosModelView({ todosModel: todosInstance }).View;

export const TodosTemplate: ComponentStory<typeof TodosView> = () => <TodosView />;

TodosTemplate.storyName = 'Список дел';
