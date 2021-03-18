import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonIconProps = {
    name: string;
    icon: string;
    badge?: number;
    selected?: boolean;
    disabled?: boolean;
    clicked: () => void;
};

const ButtonIcon: React.FC<ButtonIconProps> = (props: ButtonIconProps) => {
    const folder = (): string => {
        if (props.disabled) {
            return 'disabled';
        }
        if (props.selected) {
            return 'primary';
        }
        return 'dark';
    };

    return (
        <button
            type="button"
            disabled={props.disabled}
            onClick={props.clicked}
            className={classNames(styles['button-icon'], {
                [styles.selected]: props.selected,
                [styles.disabled]: props.disabled
            })}>
            <img width="24px" height="24px" src={`/assets/icons/${folder()}/${props.icon}.svg`} alt={props.name} />
            <span className={styles.text}>
                <small>{props.name}</small>
            </span>
            {props.badge > 0 && <span className={styles.badge}>{props.badge}</span>}
        </button>
    );
};

export default ButtonIcon;
