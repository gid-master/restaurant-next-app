import { Reducer } from 'redux';
import { UserState, INITIAL_STATE } from './state';
import { UserActions, UserActionsTypes } from './types';

const userReducer: Reducer<UserState, UserActions> = (state: UserState = INITIAL_STATE, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionsTypes.GET_USER_SUCCESS:
        case UserActionsTypes.LOGIN_SUCCESS:
        case UserActionsTypes.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authenticated: Boolean(action.payload),
                error: null
            };

        case UserActionsTypes.LOGOUT_SUCCESS:
            return { ...state, user: null, authenticated: false };

        case UserActionsTypes.PUSH_PERMISSION_SUCCESS:
            return { ...state, pushPermission: action.payload };

        case UserActionsTypes.ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

export default userReducer;
