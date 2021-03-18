import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/client/interfaces/IProduct';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CardCoverProps = {
    product: IProduct;
    clicked: (productSku: string) => void;
};

const CardCover: React.FC<CardCoverProps> = (props: CardCoverProps) => (
    <div className={styles['card-cover']}>
        <Image
            className={styles.image}
            src={`/${props.product.image}`}
            alt={props.product.name}
            onError={formatImageFallback}
            width={278}
            height={265}
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
                <button type="button" className={styles.button} onClick={() => props.clicked(props.product.sku)}>
                    Order
                </button>
            </div>
        </div>
    </div>
);

export default CardCover;
