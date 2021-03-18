import { Reducer } from 'redux';
import { SettingsState, INITIAL_STATE } from './state';
import { SettingsActions, SettingsActionsTypes } from './types';

const settingsReducer: Reducer<SettingsState, SettingsActions> = (state: SettingsState = INITIAL_STATE, action: SettingsActions): SettingsState => {
    switch (action.type) {
        case SettingsActionsTypes.SHOW_SNACKBAR:
            return { ...state, snackbar: action.payload };

        case SettingsActionsTypes.SHOW_MODAL:
            return { ...state, modal: action.payload };

        case SettingsActionsTypes.SHOW_INSTALL:
            return { ...state, showInstall: action.payload };

        default:
            return state;
    }
};

export default settingsReducer;
