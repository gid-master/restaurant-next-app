import { Action } from 'redux';
import { ICart } from '@/client/interfaces/ICart';
import { ICheckoutResponse } from '@/client/interfaces/ICheckout';

export enum CheckoutActionsTypes {
    LOAD_CART_SUCCESS = '@checkout/LOAD_CART_SUCCESS',
    SET_CART_SUCCESS = '@checkout/SET_CART_SUCCESS',
    DELETE_CART_SUCCESS = '@checkout/DELETE_CART_SUCCESS',
    REMOVE_CART_SUCCESS = '@checkout/REMOVE_CART_SUCCESS',
    CHECKOUT_SUCCESS = '@checkout/CHECKOUT_SUCCESS',
    SET_PREFERRED_CART = '@checkout/SET_PREFERRED_CART'
}

interface LoadCartSuccessAction extends Action {
    type: CheckoutActionsTypes.LOAD_CART_SUCCESS;
    payload: ICart[];
}

interface SetCartSuccessAction extends Action {
    type: CheckoutActionsTypes.SET_CART_SUCCESS;
    payload: ICart;
}

interface DeleteCartSuccessAction extends Action {
    type: CheckoutActionsTypes.DELETE_CART_SUCCESS;
    payload: string;
}

interface RemoveCartSuccessAction extends Action {
    type: CheckoutActionsTypes.REMOVE_CART_SUCCESS;
}

interface CheckoutSuccessAction extends Action {
    type: CheckoutActionsTypes.CHECKOUT_SUCCESS;
    payload: ICheckoutResponse;
}

interface SetPreferredCartAction extends Action {
    type: CheckoutActionsTypes.SET_PREFERRED_CART;
    payload: string;
}

export type CheckoutActions =
    | LoadCartSuccessAction
    | SetCartSuccessAction
    | DeleteCartSuccessAction
    | RemoveCartSuccessAction
    | CheckoutSuccessAction
    | SetPreferredCartAction;
