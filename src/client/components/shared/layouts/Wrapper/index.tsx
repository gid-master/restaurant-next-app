import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type WrapperProps = {
    children: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => <div className={styles['layout-wrapper']}>{props.children}</div>;

export default Wrapper;
