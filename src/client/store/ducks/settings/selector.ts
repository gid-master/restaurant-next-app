import { ApplicationState } from '@/client/store';

export const getModal = (state: ApplicationState) => state.settings.modal;
export const getSnackbar = (state: ApplicationState) => state.settings.snackbar;
export const getShowInstall = (state: ApplicationState) => state.settings.showInstall;
