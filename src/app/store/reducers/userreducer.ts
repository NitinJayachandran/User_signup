import { createReducer, on } from '@ngrx/store';
import { addUser, resetList } from '../actions/useraction';
import { User } from '../../user';
import {Store} from '@ngrx/store';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    return { ...state, users: [user, ...state.users] };
  }),
  
    on(resetList, (state) => ({ ...state, users: [] }))
);





