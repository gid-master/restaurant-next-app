import { Reducer } from 'redux';
import { CheckoutState, INITIAL_STATE } from './state';
import { CheckoutActionsTypes, CheckoutActions } from './types';

const checkoutReducer: Reducer<CheckoutState, CheckoutActions> = (state: CheckoutState = INITIAL_STATE, action: CheckoutActions): CheckoutState => {
    switch (action.type) {
        case CheckoutActionsTypes.LOAD_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            };

        case CheckoutActionsTypes.SET_CART_SUCCESS:
            return {
                ...state,
                cart: [...state.cart.filter((data) => data.id !== action.payload.id), action.payload]
            };

        case CheckoutActionsTypes.DELETE_CART_SUCCESS:
            return {
                ...state,
                cart: state.cart.filter((data) => data.id !== action.payload)
            };

        case CheckoutActionsTypes.REMOVE_CART_SUCCESS:
            return {
                ...state,
                cart: []
            };

        case CheckoutActionsTypes.CHECKOUT_SUCCESS:
            return {
                ...state,
                checkout: action.payload,
                cart: action.payload.success ? [] : state.cart
            };

        case CheckoutActionsTypes.SET_PREFERRED_CART:
            return {
                ...state,
                preferredCart: state.cart.find((data) => data.id === action.payload)
            };

        default:
            return state;
    }
};

export default checkoutReducer;
