import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonStandardProps = {
    name: string;
    icon?: string;
    detail?: string;
    submit?: boolean;
    center?: boolean;
    disabled?: boolean;
    small?: boolean;
    transparent?: boolean;
    clicked?: () => void;
};

const ButtonStandard: React.FC<ButtonStandardProps> = (props: ButtonStandardProps) => {
    const onClicked = (): void => {
        if (props.submit) {
            return;
        }

        props.clicked();
    };

    return (
        <button
            type={props.submit ? 'submit' : 'button'}
            disabled={props.disabled}
            onClick={onClicked}
            className={classNames(styles['button-standard'], {
                [styles.disabled]: props.disabled,
                [styles.center]: props.center,
                [styles.small]: props.small,
                [styles.transparent]: props.transparent
            })}>
            {props.icon && <img width="24px" height="24px" src={`/assets/icons/light/${props.icon}.svg`} alt={props.name} />}
            <span className={styles.text}>{props.name}</span>
            {props.detail && <span className={styles.detail}>{props.detail}</span>}
        </button>
    );
};

export default ButtonStandard;
