import { v4 as uuidv4 } from 'uuid';

export const initialState = [
  {
    id: uuidv4(),
    title: 'Task 1',
    complete: false,
  },
];

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHAW_ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}
