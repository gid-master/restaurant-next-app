import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/client/interfaces/IProduct';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CardVerticalProps = {
    product: IProduct;
    clicked: (productSku: string) => void;
};

const CardVertical: React.FC<CardVerticalProps> = (props: CardVerticalProps) => (
    <div className={styles['card-vertical']}>
        <Image
            className={styles.image}
            src={`/${props.product.image}`}
            alt={props.product.name}
            onError={formatImageFallback}
            width={230}
            height={160}
        />

        <div className={styles.details}>
            <span className={styles.title}>{props.product.name}</span>
            <p className={styles.description}>
                <small>{props.product.description}</small>
            </p>
            <div className={styles.actions}>
                <span className={styles.price}>
                    {formatCurrency(props.product.price)}
                    {props.product.previousPrice > 0 && <small className={styles.discount}>{formatCurrency(props.product.previousPrice)}</small>}
                </span>
                <button className={styles.button} type="button" onClick={() => props.clicked(props.product.sku)}>
                    Order
                </button>
            </div>
        </div>
    </div>
);

export default CardVertical;
