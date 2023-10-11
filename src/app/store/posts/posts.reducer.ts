import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import * as postActions from './posts.actions';


export const postsReducer = createReducer(
    initialState,
    // on(postActions.addPost, (state, action) => {
    //     let post = { ...action.post }
    //     post.id = state.posts.length + 1
    //     post.userId = state.posts.length + 1
    //     return {
    //         ...state,
    //         posts: [...state.posts, post]
    //     }
    // }),
    on(postActions.addPostSuccess, (state, action) => {
        let post = { ...action.post }
        post.userId = state.posts.length + 1        
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(postActions.editPost, (state, action) => {
        const updatedPost = state.posts.map(post => {
            return action.post.id === post.id ? action.post : post
        })
        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(postActions.deletePost, (state, { id }) => {
        const updatedPost = state.posts.filter(post => {
            return post.id !== id
        })
        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(postActions.loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    }),
);