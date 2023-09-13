import { createSelector, createFeatureSelector } from '@ngrx/store';
import { counterState } from 'src/app/models/user';

export const featureKey = 'feature';

export interface FeatureState {
    counter: number;
}

export const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(
    getCounterState,
    (state: counterState) => state.counter
);
export const getChannelName = createSelector(
    getCounterState,
    (state: counterState) => state.channelName
);