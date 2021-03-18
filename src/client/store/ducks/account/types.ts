import { Action } from 'redux';
import { IOrder, IOrderReview } from '@/client/interfaces/IOrder';

export enum AccountActionsTypes {
    GET_ORDERS_SUCCESS = '@account/GET_ORDERS_SUCESS',
    SET_REVIEW_SUCCESS = '@account/SET_REVIEW_SUCCESS'
}

interface GetOrdersSuccessAction extends Action {
    type: AccountActionsTypes.GET_ORDERS_SUCCESS;
    payload: IOrder[];
}

interface SetReviewSuccessAction extends Action {
    type: AccountActionsTypes.SET_REVIEW_SUCCESS;
    payload: IOrderReview;
}

export type AccountActions = GetOrdersSuccessAction | SetReviewSuccessAction;
