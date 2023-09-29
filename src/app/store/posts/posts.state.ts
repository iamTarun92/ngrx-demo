export interface Post {
    id?: number;
    userId?: number;
    title: string;
    body: string;
}
export interface PostsState {
    posts: Post[]
}
export const initialState: PostsState = {
    posts: []
}