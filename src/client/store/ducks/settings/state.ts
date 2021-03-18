import { IModal } from '@/client/interfaces/IModal';

export interface SettingsState {
    snackbar: string;
    modal: IModal;
    showInstall: boolean;
}

export const INITIAL_STATE: SettingsState = {
    snackbar: null,
    modal: null,
    showInstall: null
};
