import { IModal } from '@/client/interfaces/IModal';
import { SettingsActions, SettingsActionsTypes } from './types';

export const ShowSnackbar = (message: string): SettingsActions => ({
    type: SettingsActionsTypes.SHOW_SNACKBAR,
    payload: message
});

export const ShowModal = (modal: IModal): SettingsActions => ({
    type: SettingsActionsTypes.SHOW_MODAL,
    payload: modal
});

export const ShowInstall = (show: boolean): SettingsActions => ({
    type: SettingsActionsTypes.SHOW_INSTALL,
    payload: show
});
