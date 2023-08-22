import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers/user.reducer';

const getUserFeaturestate= createFeatureSelector<State>('usersState')

export const getUsers = createSelector(
    getUserFeaturestate,
    state=>state?.users
)