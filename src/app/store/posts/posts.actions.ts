import { createAction, props } from '@ngrx/store';
import { Post } from './posts.state';


export const ADD_POST_ACTION = '[posts page] add post'
export const EDIT_POST_ACTION = '[posts page] edit post'
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>()
);
export const editPost = createAction(EDIT_POST_ACTION, props<{ post: any }>()
);