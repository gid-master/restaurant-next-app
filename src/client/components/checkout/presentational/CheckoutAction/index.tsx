import React from 'react';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import { ICart } from '@/client/interfaces/ICart';
import { formatCurrency } from '@/client/utils/FormatUtil';
import styles from './styles.module.scss';

type CheckoutActionProps = {
    cart: ICart;
    editClicked: (cartId: string, productSku: string) => void;
    deleteClicked: (cartId: string) => void;
};

const CheckoutAction: React.FC<CheckoutActionProps> = (props: CheckoutActionProps) => {
    const total = (): number => {
        const additionals: number = props.cart.product.additionals.reduce((value: number, { quantity, price }) => value + quantity * price, 0);
        return (additionals + props.cart.product.price) * props.cart.product.quantity;
    };

    return (
        <div className={styles['checkout-action']}>
            <span className={styles.details}>{`${props.cart.product.quantity}x ${props.cart.product.name} - ${formatCurrency(total())}`}</span>
            <div className={styles.item}>
                <ButtonStandard
                    icon="edit"
                    name="Change item of this order"
                    center={true}
                    clicked={() => props.editClicked(props.cart.id, props.cart.product.sku)}
                />
            </div>
            <div className={styles.item}>
                <ButtonStandard icon="delete" name="Remove item from this order" center={true} clicked={() => props.deleteClicked(props.cart.id)} />
            </div>
        </div>
    );
};

export default CheckoutAction;
