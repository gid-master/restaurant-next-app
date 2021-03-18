import { ThunkAction } from 'redux-thunk';
import { authenticate, login, logout, pushPermission, register } from '@/client/services/UserService';
import { IResponse } from '@/client/interfaces/IResponse';
import { IAuthentication, IUser } from '@/client/interfaces/IUser';
import { UserState } from './state';
import { UserActions } from './types';
import { GetUserSuccess, LoginSuccess, RegisterSuccess, LogoutSuccess, PushPermissionSuccess, Error } from './actions';

type Effect = ThunkAction<void, UserState, null, UserActions>;

export const GetUser = (): Effect => async (dispatch) => {
    const response: IResponse<IUser> = await authenticate();
    dispatch(GetUserSuccess(response.success ? response.data : null));
};

export const Login = (data: IAuthentication): Effect => async (dispatch) => {
    const response: IResponse<IUser> = await login(data);

    if (response.success) {
        dispatch(LoginSuccess(response.data));
    } else {
        dispatch(Error(response.message));
    }
};

export const Register = (data: IAuthentication): Effect => async (dispatch) => {
    const response: IResponse<IUser> = await register(data);

    if (response.success) {
        dispatch(RegisterSuccess(response.data));
    } else {
        dispatch(Error(response.message));
    }
};

export const Logout = (): Effect => async (dispatch) => {
    await logout();
    dispatch(LogoutSuccess());
};

export const PushPermission = (data: string): Effect => async (dispatch) => {
    const response: IResponse<boolean> = await pushPermission(data);
    dispatch(PushPermissionSuccess(response.success ? response.data : null));
};
