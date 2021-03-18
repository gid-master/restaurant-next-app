import React from 'react';
import ButtonIncrement from '@/client/components/shared/buttons/ButtonIncrement';
import { IProductAdditional } from '@/client/interfaces/IProduct';
import { formatCurrency } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type ProductAdditionalProps = {
    maxAdditionals: number;
    additionals: IProductAdditional[];
    clicked: (id: string, increment: number) => void;
};

const ProductAdditional: React.FC<ProductAdditionalProps> = (props: ProductAdditionalProps) => {
    const disableIncrement = (): boolean => {
        const value: number = props.additionals.reduce((total: number, { quantity }) => total + quantity, 0);
        return value === props.maxAdditionals;
    };

    return (
        <div className={styles['product-additional']}>
            {props.additionals.map((additional: IProductAdditional, index: number) => (
                <div key={additional.id}>
                    <div className={styles.control}>
                        <div className={styles.item}>
                            <span className={styles.price}>{formatCurrency(additional.price)}</span>
                            <span className={styles.ingredient}>{additional.name}</span>
                            <p className={styles.description}>
                                <small>{additional.description}</small>
                            </p>
                        </div>

                        <ButtonIncrement
                            disabledMin={additional.quantity === 0}
                            disabledMax={additional.quantity === additional.limit || disableIncrement()}
                            quantity={additional.quantity}
                            clicked={(increment: number) => props.clicked(additional.id, increment)}
                        />
                    </div>
                    {index < props.additionals.length - 1 && <div className={styles.separator} />}
                </div>
            ))}
        </div>
    );
};

export default ProductAdditional;
