import { Reducer } from 'redux';
import { AccountState, INITIAL_STATE } from './state';
import { AccountActions, AccountActionsTypes } from './types';

const accountReducer: Reducer<AccountState, AccountActions> = (state: AccountState = INITIAL_STATE, action: AccountActions): AccountState => {
    switch (action.type) {
        case AccountActionsTypes.GET_ORDERS_SUCCESS:
            return { ...state, orders: action.payload };

        case AccountActionsTypes.SET_REVIEW_SUCCESS:
            return {
                ...state,
                orders: state.orders.map((data) => {
                    if (data.id === action.payload.orderId) {
                        data.products = data.products.map((product) => {
                            product.review = product.itemId === action.payload.itemId ? action.payload.review : product.review;
                            return product;
                        });
                    }
                    return data;
                })
            };

        default:
            return state;
    }
};

export default accountReducer;
