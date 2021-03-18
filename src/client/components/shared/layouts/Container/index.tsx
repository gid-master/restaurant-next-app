import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ContainerProps = {
    title?: string;
    link?: string;
    clicked?: () => void;
    children: ReactNode;
};

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    const onClick = () => {
        if (!props.clicked) {
            return;
        }

        props.clicked();
    };

    return (
        <div className={styles['layout-container']}>
            {props.title && (
                <div className={styles.header}>
                    <h2 className={styles.title}>{props.title}</h2>
                    {props.link && (
                        <button type="button" className={styles.link} onClick={onClick}>
                            {props.link}
                        </button>
                    )}
                </div>
            )}
            {props.children}
        </div>
    );
};

export default Container;
