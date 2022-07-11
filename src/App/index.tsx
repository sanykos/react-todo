import React, { FC } from 'react';

import { Container } from '@material-ui/core';

import { TodosModelView } from '../Todos/modelView/TodosModelView';
import { TodosModel } from '../Todos/model/TodosModel';

const App: FC = () => {
  const todosVM = new TodosModelView({ todosModel: new TodosModel([{ id: '1', title: 'title', complete: false }]) });
  return (
    <Container id="App">
      <todosVM.View />
    </Container>
  );
};

export default App;
