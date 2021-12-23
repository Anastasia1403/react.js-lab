import { MouseEventHandler } from 'react';

export interface Item {
  name: string,
  callback: MouseEventHandler<HTMLLIElement>
}

export const patientCardDropDown: Item[] = [
  {
    name: 'Create a Resolution',
    // eslint-disable-next-line
    callback: () => { console.log('Create'); },
  },
  {
    name: 'Edit a Resolution',
    // eslint-disable-next-line
    callback: () => { console.log('Edit'); },
  },
  {
    name: 'Delete',
    // eslint-disable-next-line
    callback: () => { console.log('Delete'); },
  },
];
