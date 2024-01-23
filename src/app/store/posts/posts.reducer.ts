import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import * as postActions from './posts.actions';
import { PostsState } from 'src/app/models/common';


export const postsReducer = createReducer(
    initialState,
    // on(postActions.addPost, (state:PostsState, action) => {
    //     let post = { ...action.post }
    //     post.id = state.posts.length + 1
    //     post.userId = state.posts.length + 1
    //     return {
    //         ...state,
    //         posts: [...state.posts, post]
    //     }
    // }),
    on(postActions.addPostSuccess, (state: PostsState, action) => {
        let post = { ...action.post }
        post.userId = state.posts.length + 1
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(postActions.editPost, (state: PostsState, { post }) => {
        const posts = state.posts.map(resPost => {
            return post.id === resPost.id ? post : resPost
        })
        return {
            ...state,
            posts
        }
    }),
    on(postActions.deletePost, (state: PostsState, { id }) => {
        const posts = state.posts.filter(post => {
            return post.id !== id
        })
        return {
            ...state,
            posts
        }
    }),
    on(postActions.loadPostsSuccess, (state: PostsState, { posts }) => {
        return {
            ...state,
            posts
        }
    }),
    on(postActions.loadPostsFailure, (state, { error }) => ({ ...state, error }))

);