import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { Users } from 'src/app/models/user';

export const userFeatureKey = 'usersState';

export interface State {
  users: Users[]
  error: string
}

export const initialState: State = {
  users: [],
  error: ''
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => state),
  on(UserActions.loadUsersSuccess, (state, { data }) => ({
    ...state, users: data
  })),
);

