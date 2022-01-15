import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { TextField } from '@material-ui/core';
import { IAddTodos } from './interfaces';

const AddTodos = (props: IAddTodos) => {
  const { addTodo } = props;
  const [value, setValue] = useState('');

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <TextField
      id="outlined-error"
      value={value}
      onChange={changeInputHandler}
      onKeyPress={onKeyPressHandler}
      fullWidth
    />
  );
};

export default AddTodos;
