import React from 'react';
import styles from './styles.module.scss';

const ErrorServer: React.FC = () => (
    <div className={styles.error}>
        <h2>SERVER ERROR</h2>
        <p>Sorry, this error wasn't expected, we will be working on it to avoid eventual problems.</p>
    </div>
);

export default ErrorServer;
