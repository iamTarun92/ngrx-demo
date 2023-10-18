import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { PostsState, CounterState } from "../models/common";
import { counterReducer } from "./counter/counter.reducer";
import { postsReducer } from "./posts/posts.reducer";
export interface AppState {
    counter: CounterState;
    posts: PostsState;
    router: RouterReducerState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer,
    router: routerReducer
}