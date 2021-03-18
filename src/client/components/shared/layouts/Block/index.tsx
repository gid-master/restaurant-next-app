import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type BlockProps = {
    title?: string;
    subtitle?: string;
    link?: string;
    clicked?: () => void;
    children: ReactNode;
};

const Block: React.FC<BlockProps> = (props: BlockProps) => {
    const onClick = () => {
        if (!props.clicked) {
            return;
        }

        props.clicked();
    };

    return (
        <div className={styles['layout-block']}>
            {props.title && (
                <div className={styles['layout-header']}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles.title}>{props.title}</h2>
                        {props.link && (
                            <button type="button" className={styles.link} onClick={onClick}>
                                {props.link}
                            </button>
                        )}
                    </div>
                    {props.subtitle && (
                        <span className={styles.subtitle}>
                            <small>{props.subtitle}</small>
                        </span>
                    )}
                </div>
            )}
            {props.children}
        </div>
    );
};

export default Block;
