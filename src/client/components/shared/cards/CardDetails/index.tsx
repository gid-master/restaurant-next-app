import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/client/interfaces/IProduct';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CardDetailsProps = {
    product: IProduct;
    clicked: (productSku: string) => void;
};

const CardDetails: React.FC<CardDetailsProps> = (props: CardDetailsProps) => {
    const averageReview: string = (props.product.reviews.totalRating / props.product.reviews.totalReviews).toFixed(1);

    return (
        <div className={styles['card-details']} onClick={() => props.clicked(props.product.sku)}>
            <div className={styles.macro}>
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
                    <span className={styles.name}>{props.product.name}</span>
                    <div className={styles.row1}>
                        <span className={styles.price}>
                            <small>{formatCurrency(props.product.price)}</small>
                            {props.product.previousPrice > 0 && (
                                <small className={styles.discount}>{formatCurrency(props.product.previousPrice)}</small>
                            )}
                        </span>
                        <span className={styles.calories}>
                            <small>{props.product.calories}cal</small>
                        </span>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.category}>
                            <img width="100px" height="80px" src={`/assets/categories/${props.product.category}.svg`} alt={props.product.category} />
                            <span>
                                <small>{props.product.category}</small>
                            </span>
                        </div>

                        <div className={styles.review}>
                            <img width="20px" height="20px" src={'/assets/icons/gold/star.svg'} alt="review" />
                            <span>
                                <small>{`${averageReview} (${props.product.reviews.totalReviews})`}</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.description}>
                <small> {props.product.description} </small>
            </p>
        </div>
    );
};

export default CardDetails;
