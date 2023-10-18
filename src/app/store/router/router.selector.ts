import { RouterStateUrl } from './custom-route-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentroute = createSelector(
    getRouterState,
    (router) => router.state
)