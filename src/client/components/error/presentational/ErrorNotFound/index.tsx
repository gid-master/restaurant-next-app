import React from 'react';
import styles from './styles.module.scss';

const ErrorNotFound: React.FC = () => (
    <div className={styles.error}>
        <h2>NOT FOUND</h2>
        <p>This page wasn't found, click on button below to return to the main page.</p>
    </div>
);

export default ErrorNotFound;
