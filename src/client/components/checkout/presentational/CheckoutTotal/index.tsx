import { ICartSummary } from '@/client/interfaces/ICart';
import { formatCurrency } from '@/client/utils/FormatUtil';
import React from 'react';
import styles from './styles.module.scss';

type CheckoutPaymentMethodProps = {
    cartSummary: ICartSummary;
};

const CheckoutPaymentMethod: React.FC<CheckoutPaymentMethodProps> = (props: CheckoutPaymentMethodProps) => (
    <div className={styles['checkout-total']}>
        <div className={styles.item}>
            <span className={styles.title}>Main meals ({props.cartSummary.quantityProducts})</span>
            <span className={styles.price}>{formatCurrency(props.cartSummary.totalProducts)}</span>
        </div>
        <div className={styles.item}>
            <span className={styles.title}>Additional items ({props.cartSummary.quantityAdditionals})</span>
            <span className={styles.price}>{formatCurrency(props.cartSummary.totalAdditionals)}</span>
        </div>
        <hr />
        <div className={`${styles.item} ${styles.highlight}`}>
            <span className={styles.title}>TOTAL</span>
            <span className={styles.price}>{formatCurrency(props.cartSummary.total)}</span>
        </div>
    </div>
);

export default CheckoutPaymentMethod;
