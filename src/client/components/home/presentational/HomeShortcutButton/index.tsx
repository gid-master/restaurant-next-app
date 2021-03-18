import React from 'react';
import styles from './styles.module.scss';

type HomeShortcutButtonProps = {
    name: string;
    icon: string;
    clicked: () => void;
};

const HomeShortcutButton: React.FC<HomeShortcutButtonProps> = (props: HomeShortcutButtonProps) => (
    <button type="button" className={styles['home-shortcut-button']} onClick={props.clicked}>
        <div className={styles.image}>
            <img width="74px" height="74px" src={`/assets/icons/primary/${props.icon}.svg`} alt={props.name} />
        </div>
        <span>{props.name}</span>
    </button>
);

export default HomeShortcutButton;
