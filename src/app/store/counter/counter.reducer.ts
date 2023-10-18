import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';
import { initialState } from './counter.state';
import { CounterState } from 'src/app/models/common';


export const counterReducer = createReducer(
    initialState,
    on(counterActions.increment, (state: CounterState) => {
        return {
            ...state, counter: state.counter + 1
        }
    }),
    on(counterActions.decrement, (state: CounterState) => {
        return {
            ...state, counter: state.counter - 1
        }
    }),
    on(counterActions.reset, (state: CounterState) => {
        return {
            ...state, counter: 0
        }
    }),
    on(counterActions.customInput, (state: CounterState, { num }) => {
        return {
            ...state, counter: state.counter + num
        }
    }),
);