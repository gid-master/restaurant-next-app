import { IAuthentication, IUser } from '@/client/interfaces/IUser';
import { IResponse } from '@/client/interfaces/IResponse';
import { useCookie } from '@/client/utils/StorageUtil';
import { axios } from './axios';

export const authenticate = async (): Promise<IResponse<IUser>> => {
    const response: IResponse<IUser> = await axios.get('user/authenticate');
    return response;
};

export const login = async (authentication: IAuthentication): Promise<IResponse<IUser>> => {
    const response: IResponse<IUser> = await axios.post('user/login', authentication);

    if (response.success) {
        useCookie.setItem('authentication', response.data.token);
    }

    return response;
};

export const register = async (authentication: IAuthentication): Promise<IResponse<IUser>> => {
    const response: IResponse<IUser> = await axios.post('user/register', authentication);

    if (response.success) {
        useCookie.setItem('authentication', response.data.token);
    }

    return response;
};

export const logout = async () => {
    useCookie.removeItem('authentication');
};

export const pushPermission = async (permission: string): Promise<IResponse<boolean>> => axios.post('user/push', { permission });
