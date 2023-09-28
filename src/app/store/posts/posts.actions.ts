import { createAction, props } from '@ngrx/store';
import { Post } from './posts.state';


export const ADD_POST_ACTION = 'add post'
export const EDIT_POST_ACTION = 'edit post'
export const DELETE_POST_ACTION = 'delete post'
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>()
);
export const editPost = createAction(EDIT_POST_ACTION, props<{ post: Post }>()
);
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string }>()
);