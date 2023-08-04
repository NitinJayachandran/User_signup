import { createAction, props } from '@ngrx/store';
import { User } from '../../user';

export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);

export const resetList = createAction('[User] Reset User List');





