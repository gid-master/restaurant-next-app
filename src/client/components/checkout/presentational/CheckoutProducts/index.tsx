import React from 'react';
import { ICart } from '@/client/interfaces/ICart';
import CheckoutProductCard from '../CheckoutProductCard';
import styles from './styles.module.scss';

type CheckoutProductsProps = {
    cart: ICart[];
    clicked: (cartId: string) => void;
};

const CheckoutProducts: React.FC<CheckoutProductsProps> = (props: CheckoutProductsProps) => (
    <div className={styles['checkout-product-list']}>
        {props.cart.map((item: ICart, index: number) => (
            <div className={styles.item} key={item.id}>
                <CheckoutProductCard product={item.product} clicked={() => props.clicked(item.id)} />
                {index < props.cart.length - 1 && <hr />}
            </div>
        ))}
    </div>
);

export default CheckoutProducts;
