import { ICart } from '@/client/interfaces/ICart';
import { ApplicationState } from '@/client/store';
import { createSelector } from 'reselect';

export const getCheckout = (state: ApplicationState) => state.checkout.checkout;

export const getPreferredCart = (state: ApplicationState) => state.checkout.preferredCart;

export const getCart = (state: ApplicationState) =>
    state.checkout.cart.map((cart: ICart) => ({
        ...cart,
        product: {
            ...cart.product,
            additionals: cart.product.additionals.filter((item) => item.quantity > 0)
        }
    }));

export const getCartQuantity = (state: ApplicationState) => state.checkout.cart.length;

export const getCartSummary = createSelector([getCart], (cart: ICart[]) => {
    const totalProducts: number = cart.reduce((value: number, { product }) => value + product.price * product.quantity, 0);

    const quantityProducts: number = cart.reduce((value: number, { product }) => value + product.quantity, 0);

    const totalAdditionals = cart.reduce(
        (totalProduct: number, { product }) =>
            totalProduct +
            product.additionals.reduce((totalAdditional: number, { quantity, price }) => totalAdditional + quantity * price * product.quantity, 0),
        0
    );

    const quantityAdditionals = cart.reduce(
        (totalProduct: number, { product }) =>
            totalProduct + product.additionals.reduce((totalAdditional: number, { quantity }) => totalAdditional + quantity * product.quantity, 0),
        0
    );

    const total: number = totalProducts + totalAdditionals;

    return {
        totalProducts,
        quantityProducts,
        totalAdditionals,
        quantityAdditionals,
        total
    };
});
