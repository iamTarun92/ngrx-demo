export interface CounterState {
    counter: number;
    channelName: string;
}
export interface AuthState {
    email: string;
    password: string
}
export interface Post {
    id?: number;
    userId?: number;
    title: string;
    body: string;
}
export interface PostsState {
    posts: Post[];
    error: any
}