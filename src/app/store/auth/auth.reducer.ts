import { createReducer, on } from '@ngrx/store';
import * as counterActions from './auth.actions';
import { initialState } from './auth.state';


export const AuthReducer = createReducer(
    initialState,
);