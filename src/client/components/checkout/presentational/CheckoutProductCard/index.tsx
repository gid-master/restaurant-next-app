import React from 'react';
import Image from 'next/image';
import { IProduct, IProductAdditional } from '@/client/interfaces/IProduct';
import ButtonCircle from '@/client/components/shared/buttons/ButtonCircle';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CheckoutProductCardProps = {
    product: IProduct;
    clicked: () => void;
};

const CheckoutProducts: React.FC<CheckoutProductCardProps> = (props: CheckoutProductCardProps) => {
    const total = (): number => {
        const additionals: number = props.product.additionals.reduce(
            (value: number, additional: IProductAdditional) => value + additional.quantity * additional.price,
            0
        );

        return (additionals + props.product.price) * props.product.quantity;
    };

    return (
        <div className={styles['checkout-card']}>
            <div className={styles.settings}>
                <ButtonCircle icon="more" small={true} light={true} clicked={props.clicked} />
            </div>
            <div className={styles.item}>
                <div className={styles.image}>
                    <Image
                        className={styles.image}
                        src={`/${props.product.image}`}
                        alt={props.product.name}
                        onError={formatImageFallback}
                        width={100}
                        height={80}
                    />
                </div>

                <div className={styles.details}>
                    <span className={styles.name}>{`${props.product.quantity}x ${props.product.name}`}</span>
                    <span className={styles.price}>{formatCurrency(total())}</span>
                    <div className={styles.category}>
                        <img width="20px" height="20px" src={`/assets/categories/${props.product.category}.svg`} alt={props.product.category} />
                        <span>{props.product.category}</span>
                    </div>
                </div>
            </div>
            {props.product.additionals.length > 0 && (
                <div className={styles.additionals}>
                    <ul>
                        {props.product.additionals.map((additional: IProductAdditional) => (
                            <li key={additional.id}>{`${additional.quantity * props.product.quantity}x ${additional.name}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CheckoutProducts;
