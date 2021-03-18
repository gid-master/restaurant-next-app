import React from 'react';
import Image from 'next/image';
import { IOrderProduct, IOrderProductAdditional, IOrderReview } from '@/client/interfaces/IOrder';
import { formatCurrency, formatImageFallback } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type AccountOrderCardProps = {
    orderId: string;
    product: IOrderProduct;
    clicked: (review: IOrderReview) => void;
};

const AccountOrderCard: React.FC<AccountOrderCardProps> = (props: AccountOrderCardProps) => {
    const fillStar = (star: number): string => (props.product.review >= star ? 'star_full' : 'star');

    return (
        <div className={styles['account-accordion-card']}>
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
                    <span className={styles.price}>{formatCurrency(props.product.total)}</span>
                    <div className={styles.review}>
                        {[1, 2, 3, 4, 5].map((rating: number) => (
                            <img
                                width="25px"
                                height="25px"
                                key={rating}
                                onClick={() =>
                                    props.product.review === 0 &&
                                    props.clicked({
                                        orderId: props.orderId,
                                        productId: props.product.productId,
                                        itemId: props.product.itemId,
                                        review: rating
                                    })
                                }
                                src={`/assets/icons/gold/${fillStar(rating)}.svg`}
                                alt="star"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {props.product.additionals.length > 0 && (
                <div className={styles.additionals}>
                    <ul>
                        {props.product.additionals.map((additional: IOrderProductAdditional) => (
                            <li key={additional.id}>{`${additional.quantity * props.product.quantity}x ${additional.name}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AccountOrderCard;
