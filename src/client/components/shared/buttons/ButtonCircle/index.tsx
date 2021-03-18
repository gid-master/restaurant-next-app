import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonCircleProps = {
    name?: string;
    icon: string;
    selected?: boolean;
    horizontal?: boolean;
    small?: boolean;
    light?: boolean;
    clicked: () => void;
};

const ButtonCircle: React.FC<ButtonCircleProps> = (props: ButtonCircleProps) => (
    <button
        type="button"
        onClick={props.clicked}
        className={classNames(styles['button-circle'], {
            [styles.selected]: props.selected,
            [styles.horizontal]: props.horizontal,
            [styles.small]: props.small,
            [styles.light]: props.light
        })}>
        <div className={styles.image}>
            <img width="26px" height="26px" src={`/assets/icons/${props.light ? 'primary' : 'light'}/${props.icon}.svg`} alt="sort products" />
        </div>
        {props.name && <span>{props.name}</span>}
    </button>
);

export default ButtonCircle;
