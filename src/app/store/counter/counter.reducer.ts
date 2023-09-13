import { createReducer, on } from '@ngrx/store';
import * as myActions from './counter.actions';
import { initialState } from './counter.state';


export const counterReducer = createReducer(
    initialState,
    on(myActions.increment, (state) => {
        return {
            ...state, counter: state.counter + 1
        }
    }),
    on(myActions.decrement, (state) => {
        return {
            ...state, counter: state.counter - 1
        }
    }),
    on(myActions.reset, (state) => {
        return {
            ...state, counter: 0
        }
    }),
    on(myActions.customInput, (state, { num }) => {
        return {
            ...state, counter: state.counter + num
        }
    }),
);