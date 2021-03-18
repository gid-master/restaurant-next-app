import { IUser } from '@/client/interfaces/IUser';
import { UserActions, UserActionsTypes } from './types';

export const GetUserSuccess = (user: IUser): UserActions => ({
    type: UserActionsTypes.GET_USER_SUCCESS,
    payload: user
});

export const LoginSuccess = (user: IUser): UserActions => ({
    type: UserActionsTypes.LOGIN_SUCCESS,
    payload: user
});

export const RegisterSuccess = (user: IUser): UserActions => ({
    type: UserActionsTypes.REGISTER_SUCCESS,
    payload: user
});

export const LogoutSuccess = (): UserActions => ({
    type: UserActionsTypes.LOGOUT_SUCCESS
});

export const PushPermissionSuccess = (permission: boolean): UserActions => ({
    type: UserActionsTypes.PUSH_PERMISSION_SUCCESS,
    payload: permission
});

export const Error = (error: string): UserActions => ({
    type: UserActionsTypes.ERROR,
    payload: error
});
