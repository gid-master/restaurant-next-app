import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import React from 'react';
import styles from './styles.module.scss';

type CheckoutEmptyProps = {
    clicked: () => void;
};

const CheckoutEmpty: React.FC<CheckoutEmptyProps> = (props: CheckoutEmptyProps) => (
    <div className={styles['checkout-empty']}>
        <div className={styles.image}>
            <img width="100px" height="100px" src="/assets/icons/primary/cart.svg" alt="empty" />
        </div>
        <h2>Your cart is still empty</h2>
        <p>pick something from our menu</p>
        <ButtonStandard icon="menu" name="check out our menu" center={true} clicked={props.clicked} />
    </div>
);

export default CheckoutEmpty;
