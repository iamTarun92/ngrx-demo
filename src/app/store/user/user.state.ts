import { Users } from "src/app/models/user";

export interface State {
    users: Users[]
}

export const initialState: State = {
    users: [],
};
