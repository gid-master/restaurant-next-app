import { IUser } from '@/client/interfaces/IUser';

export interface UserState {
    user: IUser;
    error: string;
    authenticated: boolean;
    pushPermission: boolean;
}

export const INITIAL_STATE: UserState = {
    user: null,
    error: null,
    authenticated: false,
    pushPermission: false
};
