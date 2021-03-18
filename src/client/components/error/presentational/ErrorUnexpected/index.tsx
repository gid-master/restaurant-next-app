import React from 'react';
import styles from './styles.module.scss';

const ErrorUnexpected: React.FC = () => (
    <div className={styles.error}>
        <h2>UNEXPECTED ERROR</h2>
        <p>Something unexpected happened, please try again soon.</p>
    </div>
);

export default ErrorUnexpected;
