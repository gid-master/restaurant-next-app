import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonIncrementProps = {
    large?: boolean;
    disabledMin: boolean;
    disabledMax: boolean;
    quantity: number;
    clicked: (increment: number) => void;
};

const ButtonIncrement: React.FC<ButtonIncrementProps> = (props: ButtonIncrementProps) => (
    <div className={classNames(styles['button-increment'], { [styles.large]: props.large })}>
        <button type="button" disabled={props.disabledMax} onClick={() => props.clicked(1)}>
            <img width="20px" height="20px" src={'/assets/icons/light/add.svg'} alt="add" />
        </button>
        <span>{props.quantity}</span>
        <button type="button" disabled={props.disabledMin} onClick={() => props.clicked(-1)}>
            <img width="20px" height="20px" src={'/assets/icons/light/remove.svg'} alt="remove" />
        </button>
    </div>
);

export default ButtonIncrement;
