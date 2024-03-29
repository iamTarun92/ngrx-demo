import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/common';


export const LOAD_POSTS = 'load posts'
export const LOAD_POSTS_SUCCESS = 'load posts success'
export const LOAD_FAILURE = 'load Failure'
export const ADD_POST_ACTION = 'add post'
export const ADD_POST_SUCCESS = 'add post success'
export const EDIT_POST_ACTION = 'edit post'
export const DELETE_POST_ACTION = 'delete post'


export const loadPosts = createAction(LOAD_POSTS)
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(LOAD_FAILURE, props<{ error: any }>());
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>()
);
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{ post: any }>()
);
export const editPost = createAction(EDIT_POST_ACTION, props<{ post: Post }>()
);
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: number }>()
);
