import { PostsState, CounterState } from "../models/common";
import { counterReducer } from "./counter/counter.reducer";
import { postsReducer } from "./posts/posts.reducer";
export interface AppState {
    counter: CounterState;
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}