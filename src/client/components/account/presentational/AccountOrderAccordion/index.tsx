import React from 'react';
import classNames from 'classnames';
import { IOrder, IOrderProduct, IOrderReview } from '@/client/interfaces/IOrder';
import { formatCurrency } from '@/client/utils/FormatUtil';
import AccountOrderCard from '../AccountOrderCard';
import styles from './styles.module.scss';

type AccountOrderAccordionProps = {
    collapse: string;
    orders: IOrder[];
    orderClicked: (orderId: string) => void;
    reviewClicked: (review: IOrderReview) => void;
};

const AccountOrderAccordion: React.FC<AccountOrderAccordionProps> = (props: AccountOrderAccordionProps) => (
    <div className={styles['account-accordion']}>
        <ul className={styles['accordion-list']}>
            {props.orders.map((order: IOrder) => (
                <li
                    key={order.id}
                    className={classNames(styles['accordion-list-item'], {
                        [styles.show]: props.collapse === order.id
                    })}>
                    <div className={styles['order-header']} onClick={() => props.orderClicked(props.collapse !== order.id ? order.id : null)}>
                        <div className={styles.image}>
                            <img width="15px" height="15px" className={styles.add} src="/assets/icons/light/add.svg" alt="open" />
                            <img width="15px" height="15px" className={styles.remove} src="/assets/icons/light/remove.svg" alt="collapse" />
                        </div>
                        <span className={styles.title}>Order {new Date(order.date).toLocaleDateString()}</span>
                        <span className={styles.total}>{formatCurrency(order.total)}</span>
                    </div>

                    <div className={styles.content}>
                        {order.products.map((product: IOrderProduct, index: number) => (
                            <div className={styles.item} key={`${product.productId}-${order.id}`}>
                                <AccountOrderCard orderId={order.id} product={product} clicked={props.reviewClicked} />
                                {index < order.products.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
        {props.orders.length === 0 && <span className={styles.empty}>you haven't purchased yet.</span>}
    </div>
);

export default AccountOrderAccordion;
