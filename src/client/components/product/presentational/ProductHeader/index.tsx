import React from 'react';
import Image from 'next/image';
import ButtonCircle from '@/client/components/shared/buttons/ButtonCircle';
import { IProduct } from '@/client/interfaces/IProduct';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type ProductHeaderProps = {
    product: IProduct;
    clicked: () => void;
};

const ProductHeader: React.FC<ProductHeaderProps> = (props: ProductHeaderProps) => (
    <div className={styles['product-header']}>
        <div className={styles['image-cover']}>
            <div className={styles.image}>
                <Image
                    className={styles.image}
                    src={`/${props.product.image}`}
                    alt={props.product.name}
                    onError={formatImageFallback}
                    layout="fill"
                />
            </div>

            <div className={styles.back}>
                <ButtonCircle icon="arrow_back" light={true} clicked={props.clicked} />
            </div>
        </div>
        <div className={styles.details}>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>

            <div className={styles.row}>
                <span className={styles.price}>
                    {formatCurrency(props.product.price)}
                    {props.product.previousPrice > 0 && <small className={styles.discount}>{formatCurrency(props.product.previousPrice)}</small>}
                </span>
                <div className={styles.category}>
                    <img width="20px" height="20px" src={`/assets/categories/${props.product.category}.svg`} alt={props.product.category} />
                    <span>{props.product.category}</span>
                </div>
            </div>
        </div>
    </div>
);

export default ProductHeader;
