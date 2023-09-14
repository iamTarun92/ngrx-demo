import { createSelector, createFeatureSelector } from '@ngrx/store';
import { counterState } from 'src/app/models/user';

export const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(
    getCounterState,
    (state: counterState) => state.counter
);
export const getChannelName = createSelector(
    getCounterState,
    (state: counterState) => state.channelName
);

export const getData = createSelector(
    getCounterState,
    (state) => {
        return state.data.map(x => x.payments.Matched).reduce((acc, it) => [...acc, ...it], [])
    }
);