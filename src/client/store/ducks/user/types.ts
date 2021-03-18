import { Action } from 'redux';
import { IUser } from '@/client/interfaces/IUser';

export enum UserActionsTypes {
    GET_USER_SUCCESS = '@user/GET_USER_SUCCESS',
    LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
    REGISTER_SUCCESS = '@user/REGISTER_SUCCESS',
    LOGOUT_SUCCESS = '@user/LOGOUT_SUCCESS',
    PUSH_PERMISSION_SUCCESS = '@user/PUSH_PERMISSION_SUCCESS',
    ERROR = '@user/ERROR'
}

interface GetUserSuccessAction extends Action {
    type: UserActionsTypes.GET_USER_SUCCESS;
    payload: IUser;
}

interface LoginSuccessAction extends Action {
    type: UserActionsTypes.LOGIN_SUCCESS;
    payload: IUser;
}

interface RegisterSuccessAction extends Action {
    type: UserActionsTypes.REGISTER_SUCCESS;
    payload: IUser;
}

interface LogoutSuccessAction extends Action {
    type: UserActionsTypes.LOGOUT_SUCCESS;
}

interface PushPermissionSuccessAction extends Action {
    type: UserActionsTypes.PUSH_PERMISSION_SUCCESS;
    payload: boolean;
}

interface ErrorAction extends Action {
    type: UserActionsTypes.ERROR;
    payload: string;
}

export type UserActions =
    | GetUserSuccessAction
    | LoginSuccessAction
    | RegisterSuccessAction
    | LogoutSuccessAction
    | PushPermissionSuccessAction
    | ErrorAction;
