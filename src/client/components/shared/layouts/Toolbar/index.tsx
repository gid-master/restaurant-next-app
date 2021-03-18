import React from 'react';
import ButtonIcon from '@/client/components/shared/buttons/ButtonIcon';
import styles from './styles.module.scss';

type ToolbarProps = {
    toolbarId: string;
    cartQuantity: number;
    clicked: (toolbarId: string) => void;
};

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => (
    <div className={styles['layout-toolbar']}>
        <ButtonIcon name="Home" icon="store" selected={!props.toolbarId} clicked={() => props.clicked(null)} />

        <ButtonIcon name="Menu" icon="menu" selected={props.toolbarId === 'menu'} clicked={() => props.clicked('menu')} />

        <ButtonIcon
            name="Checkout"
            icon="cart"
            badge={props.cartQuantity}
            selected={props.toolbarId === 'checkout'}
            clicked={() => props.clicked('checkout')}
        />

        <ButtonIcon
            name="Account"
            icon="profile"
            selected={props.toolbarId === 'account' || props.toolbarId === 'login'}
            clicked={() => props.clicked('account')}
        />
    </div>
);

export default Toolbar;
