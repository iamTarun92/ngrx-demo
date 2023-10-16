import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from 'src/app/models/common';

export const getCounterState = createFeatureSelector<AuthState>('auth');

export const loginEmail = createSelector(
    getCounterState,
    (state: AuthState) => state.email
);
export const loginPassword = createSelector(
    getCounterState,
    (state: AuthState) => state.password
);
