import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Post, PostsState } from './posts.state';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(
    getPostsState,
    (state:PostsState) => state.posts
);
