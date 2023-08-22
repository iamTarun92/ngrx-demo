import { createReducer, on } from '@ngrx/store';
import { iUser } from '../../../models/user';
import { UserActions } from '../user.actions';

export const userFeatureKey = 'usersState';

export interface State {
  users: iUser[]
  error:string
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

