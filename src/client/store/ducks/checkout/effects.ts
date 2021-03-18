import { ThunkAction } from 'redux-thunk';
import { ICart } from '@/client/interfaces/ICart';
import { useLocalStorage } from '@/client/utils/StorageUtil';
import { ICheckout } from '@/client/interfaces/ICheckout';
import { processCheckout } from '@/client/services/CheckoutService';
import { IResponse } from '@/client/interfaces/IResponse';
import { CheckoutState } from './state';
import { CheckoutActions } from './types';
import { DeleteCartSuccess, LoadCartSuccess, RemoveCartSuccess, SetCartSuccess, CheckoutSuccess } from './actions';

type Effect = ThunkAction<void, CheckoutState, null, CheckoutActions>;

export const LoadCart = (): Effect => async (dispatch) => {
    const cart: ICart[] = await useLocalStorage.getItem('cart');
    dispatch(LoadCartSuccess(cart || []));
};

export const SetCart = (cart: ICart): Effect => async (dispatch) => {
    const cartStoraged: ICart[] = await useLocalStorage.getItem('cart');
    const newCart: ICart[] = cartStoraged ? cartStoraged.filter((data) => data.id !== cart.id) : [];

    useLocalStorage.setItem('cart', [...newCart, cart]);
    dispatch(SetCartSuccess(cart));
};

export const DeleteCart = (cartId: string): Effect => async (dispatch) => {
    const cartStoraged: ICart[] = await useLocalStorage.getItem('cart');
    const newCart: ICart[] = cartStoraged ? cartStoraged.filter((data) => data.id !== cartId) : [];

    useLocalStorage.setItem('cart', newCart);
    dispatch(DeleteCartSuccess(cartId));
};

export const RemoveCart = (): Effect => async (dispatch) => {
    useLocalStorage.removeItem('cart');
    dispatch(RemoveCartSuccess());
};

export const Checkout = (checkout: ICheckout): Effect => async (dispatch) => {
    const response: IResponse<ICheckout> = await processCheckout(checkout);

    if (response.success) {
        useLocalStorage.removeItem('cart');
    }

    dispatch(
        CheckoutSuccess({
            success: response.success,
            message: response.message ? response.message : null
        })
    );
};
