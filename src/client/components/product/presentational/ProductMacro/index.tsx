import React from 'react';
import { IProduct } from '@/client/interfaces/IProduct';
import styles from './styles.module.scss';

type ProductMacroProps = {
    product: IProduct;
};

const ProductMacro: React.FC<ProductMacroProps> = (props: ProductMacroProps) => (
    <div className={styles['product-macro']}>
        <div className={styles.item}>
            <img width="26px" height="26px" src="/assets/icons/gold/calories.svg" alt="calories" />
            <span>{props.product.calories} cal</span>
        </div>
        <div className={styles.separator} />
        <div className={styles.item}>
            <img width="26px" height="26px" src="/assets/icons/gold/weight.svg" alt="weight" />
            <span>
                {props.product.portionSize} {props.product.unitType}
            </span>
        </div>
        <div className={styles.separator} />
        <div className={styles.item}>
            <img width="26px" height="26px" src="/assets/icons/gold/room_service.svg" alt="serve" />
            <span>servem {props.product.servingPeople}</span>
        </div>
    </div>
);

export default ProductMacro;
