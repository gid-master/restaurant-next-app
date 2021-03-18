import { Action } from 'redux';
import { IModal } from '@/client/interfaces/IModal';

export enum SettingsActionsTypes {
    SHOW_SNACKBAR = '@settings/SHOW_SNACKBAR',
    SHOW_MODAL = '@settings/SHOW_MODAL',
    SHOW_INSTALL = '@settings/SHOW_INSTALL'
}

interface ShowSnackbarAction extends Action {
    type: SettingsActionsTypes.SHOW_SNACKBAR;
    payload: string;
}

interface ShowModalAction extends Action {
    type: SettingsActionsTypes.SHOW_MODAL;
    payload: IModal;
}

interface ShowInstallAction extends Action {
    type: SettingsActionsTypes.SHOW_INSTALL;
    payload: boolean;
}

export type SettingsActions = ShowSnackbarAction | ShowModalAction | ShowInstallAction;
