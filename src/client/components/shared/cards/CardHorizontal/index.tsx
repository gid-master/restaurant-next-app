import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/client/interfaces/IProduct';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CardHorizontalProps = {
    product: IProduct;
    clicked: (productSku: string) => void;
};

const CardHorizontal: React.FC<CardHorizontalProps> = (props: CardHorizontalProps) => (
    <div className={styles['card-horizontal']}>
        <div className={styles.image}>
            <Image
                className={styles.image}
                src={`/${props.product.image}`}
                alt={props.product.name}
                onError={formatImageFallback}
                onLoad={formatImageFallback}
                height={100}
                width={120}
            />
        </div>

        <div className={styles.details}>
            <span className={styles.title}>{props.product.name}</span>
            <p className={styles.description}>
                <small>{props.product.description}</small>
            </p>
            <div className={styles.actions}>
                <span className={styles.price}>{formatCurrency(props.product.price)} </span>
                <button className={styles.button} type="button" onClick={() => props.clicked(props.product.sku)}>
                    Order
                </button>
            </div>
        </div>
    </div>
);

export default CardHorizontal;
