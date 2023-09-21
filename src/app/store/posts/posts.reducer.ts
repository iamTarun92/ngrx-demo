import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import * as postActions from './posts.actions';


export const postsReducer = createReducer(
    initialState,
    on(postActions.addPost, (state, {setPost}) => {
        let post = { ...setPost }
        post.id = state.posts.length + 1
        return {
            posts: [...state.posts, post]
        }
    }),
);