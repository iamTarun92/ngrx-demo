import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Post, PostsState } from 'src/app/models/common';
import { getCurrentroute } from '../router/router.selector';
import { RouterStateUrl } from '../router/custom-route-serializer';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(
    getPostsState,
    (state: PostsState) => state.posts
);
export const getPostById = createSelector(
    getPosts,
    getCurrentroute,
    (posts, router: RouterStateUrl) => {
        return posts.find(post => post.id === +router.params['id'])
    }
);

export interface FeatureState {
    counter: number;
  }
  
  export interface AppState {
    feature: FeatureState;
  }
  
  export const selectFeature = (state: AppState) => state.feature;
  // console.log(selectFeature);
  
  
  export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
  );
