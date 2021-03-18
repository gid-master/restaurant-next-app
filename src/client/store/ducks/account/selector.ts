import { IOrder } from '@/client/interfaces/IOrder';
import { ApplicationState } from '@/client/store';
import { createSelector } from 'reselect';

export const getOrders = (state: ApplicationState) => state.account.orders;

export const getOrdersSummary = createSelector([getOrders], (orders: IOrder[]) => {
    const quantityOrders: number = orders.length;

    const totalProducts: number = orders.reduce((value: number, order: IOrder) => value + order.total, 0);

    const quantityProducts: number = orders.reduce(
        (value: number, { products }) => value + products.reduce((totalProduct: number, { quantity }) => totalProduct + quantity, 0),
        0
    );

    return {
        quantityOrders,
        totalProducts,
        quantityProducts
    };
});
