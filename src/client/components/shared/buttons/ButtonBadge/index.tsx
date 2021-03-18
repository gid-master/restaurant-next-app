import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonBadgeProps = {
    name: string;
    icon: string;
    selected: boolean;
    clicked: () => void;
};

const ButtonBadge: React.FC<ButtonBadgeProps> = (props: ButtonBadgeProps) => (
    <button
        type="button"
        onClick={props.clicked}
        disabled={props.selected}
        className={classNames(styles['button-badge'], { [styles.selected]: props.selected })}>
        <img width="24px" height="24px" src={`/assets/categories/${props.icon}.svg`} alt={props.name} />
        <span>{props.name}</span>
    </button>
);

export default ButtonBadge;
