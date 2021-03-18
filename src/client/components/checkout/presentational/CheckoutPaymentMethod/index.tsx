import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import { PaymentMethodEnum, ICreditCard } from '@/client/interfaces/ICheckout';
import CheckoutGiftCard, { RefGiftCard } from '../CheckoutGiftCard';
import CheckoutCreditCard, { RefCreditCard } from '../CheckoutCreditCard';
import styles from './styles.module.scss';

type CheckoutTotalProps = {
    disabled: boolean;
    paymentMethod: PaymentMethodEnum;
    clicked: (method: PaymentMethodEnum) => void;
};

export interface RefPaymentMethod {
    submit: () => Promise<void>;
    reset: () => void;
    isValid: () => boolean;
    getGiftCard: () => string;
    getCreditCard: () => ICreditCard;
}

const CheckoutTotal = forwardRef((props: CheckoutTotalProps, ref: Ref<RefPaymentMethod>) => {
    useImperativeHandle(ref, () => ({ submit, reset, isValid, getGiftCard, getCreditCard }));
    const refGiftCard = useRef<RefGiftCard>(null);
    const refCreditCard = useRef<RefCreditCard>(null);

    const submit = () => {
        if (props.paymentMethod === PaymentMethodEnum.GIFT_CARD) {
            return refGiftCard.current.submitForm();
        }
        return refCreditCard.current.submitForm();
    };

    const reset = () => {
        if (props.paymentMethod === PaymentMethodEnum.GIFT_CARD) {
            refGiftCard.current.resetForm();
        } else {
            refCreditCard.current.resetForm();
        }
    };

    const isValid = (): boolean => {
        if (props.paymentMethod === PaymentMethodEnum.GIFT_CARD) {
            return refGiftCard.current.isValidForm();
        }
        return refCreditCard.current.isValidForm();
    };

    const getGiftCard = (): string => refGiftCard.current.getData();

    const getCreditCard = (): ICreditCard => refCreditCard.current.getData();

    return (
        <div className={styles['checkout-payment-method']}>
            <div className={styles.item}>
                <div className={styles['method-header']}>
                    <img width="24px" height="24px" className={styles.image} src="/assets/icons/dark/card.svg" alt="credit card" />
                    <span className={styles.title}>Credit Card</span>
                    <div className={styles.checkbox}>
                        <input
                            type="radio"
                            name="radioPaymentMethod"
                            id="radioCraditCard"
                            disabled={props.disabled}
                            checked={props.paymentMethod === PaymentMethodEnum.CREDIT_CARD}
                            onChange={() => props.clicked(PaymentMethodEnum.CREDIT_CARD)}
                        />
                        <label htmlFor="radioCraditCard" />
                    </div>
                </div>

                <div
                    className={classNames(styles.content, {
                        [styles.open]: props.paymentMethod === PaymentMethodEnum.CREDIT_CARD
                    })}>
                    <CheckoutCreditCard ref={refCreditCard} disabled={props.disabled} />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles['method-header']}>
                    <img width="24px" height="24px" className={styles.image} src="/assets/icons/dark/gift.svg" alt="gift card" />
                    <span className={styles.title}>Gift Card</span>
                    <div className={styles.checkbox}>
                        <input
                            type="radio"
                            name="radioPaymentMethod"
                            id="radioGiftCard"
                            disabled={props.disabled}
                            checked={props.paymentMethod === PaymentMethodEnum.GIFT_CARD}
                            onChange={() => props.clicked(PaymentMethodEnum.GIFT_CARD)}
                        />
                        <label htmlFor="radioGiftCard" />
                    </div>
                </div>

                <div
                    className={classNames(styles.content, {
                        [styles.open]: props.paymentMethod === PaymentMethodEnum.GIFT_CARD
                    })}>
                    <CheckoutGiftCard ref={refGiftCard} disabled={props.disabled} />
                </div>
            </div>
        </div>
    );
});

export default CheckoutTotal;
