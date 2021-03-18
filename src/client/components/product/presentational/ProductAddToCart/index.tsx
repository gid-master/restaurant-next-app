import React from 'react';
import ButtonIncrement from '@/client/components/shared/buttons/ButtonIncrement';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import { formatCurrency } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type ProductAddToCartProps = {
    quantity: number;
    total: number;
    incrementClicked: (increment: number) => void;
    addClicked: () => void;
};

const ProductAddToCart: React.FC<ProductAddToCartProps> = (props: ProductAddToCartProps) => (
    <div className={styles['product-add-to-cart']}>
        <div className={styles.increment}>
            <ButtonIncrement
                large={true}
                disabledMin={props.quantity === 1}
                disabledMax={false}
                quantity={props.quantity}
                clicked={props.incrementClicked}
            />
        </div>

        <div className={styles.add}>
            <ButtonStandard
                icon="add"
                name="add to cart"
                detail={formatCurrency(props.total)}
                center={false}
                small={true}
                clicked={props.addClicked}
            />
        </div>
    </div>
);

export default ProductAddToCart;
