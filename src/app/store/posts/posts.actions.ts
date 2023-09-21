import { createAction, props } from '@ngrx/store';
import { Post } from './posts.state';

export const addPost = createAction('ADD_POST_ACTION', props<{ setPost: Post }>()
);