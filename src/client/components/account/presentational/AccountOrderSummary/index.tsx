import React from 'react';
import { IOrderSummary } from '@/client/interfaces/IOrder';
import { formatCurrency } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type AccountOrderSummaryProps = {
    ordersSummary: IOrderSummary;
};

const AccountOrderSummary: React.FC<AccountOrderSummaryProps> = (props: AccountOrderSummaryProps) => (
    <div className={styles['account-summary']}>
        <div className={styles.item}>
            <span className={styles.title}>orders</span>
            <span className={styles.result}>{props.ordersSummary.quantityOrders}</span>
        </div>
        <div className={styles.separator} />
        <div className={styles.item}>
            <span className={styles.title}>amount</span>
            <span className={styles.result}>{formatCurrency(props.ordersSummary.totalProducts)}</span>
        </div>
        <div className={styles.separator} />
        <div className={styles.item}>
            <span className={styles.title}>products</span>
            <span className={styles.result}>{props.ordersSummary.quantityProducts}</span>
        </div>
    </div>
);

export default AccountOrderSummary;
