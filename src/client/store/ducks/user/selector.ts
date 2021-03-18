import { ApplicationState } from '@/client/store';

export const getUser = (state: ApplicationState) => state.user.user;
export const getError = (state: ApplicationState) => state.user.error;
export const getAuthenticated = (state: ApplicationState) => state.user.authenticated;
