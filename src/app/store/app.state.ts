import { counterReducer } from "./counter/counter.reducer";
import { counterState } from "./counter/counter.state";
import { postsReducer } from "./posts/posts.reducer";
import { PostsState } from "./posts/posts.state";

export interface AppState {
    counter: counterState;
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}