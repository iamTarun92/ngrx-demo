import { User } from "src/app/models/user";

export interface State {
    users: User[]
}

export const initialState: State = {
    users: [],
};
