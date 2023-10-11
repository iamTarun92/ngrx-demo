import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Post, PostsState } from 'src/app/models/common';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(
    getPostsState,
    (state: PostsState) => state.posts
);
export const getPostById = createSelector(
    getPostsState,
    (state: PostsState, props: any) => {
        return state.posts.find(post => post.id === +props.id)
    }
);
