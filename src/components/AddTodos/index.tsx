import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { TextField } from '@material-ui/core';
import { IAddTodos } from './interfaces';

const N = 3;

const AddTodos = (props: IAddTodos) => {
  const { addTodo } = props;
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (value.length <= N) {
        setError(true);
        return;
      }
      addTodo(value);
      setValue('');
      setError(false);
    }
  };

  return (
    <TextField
      value={value}
      onChange={changeInputHandler}
      onKeyPress={onKeyPressHandler}
      fullWidth
      error={error}
      label={error && 'Введите больше символов'}
      placeholder="add todo"
      variant="standard"
      style={{ marginTop: '10px' }}
    />
  );
};

export default AddTodos;
