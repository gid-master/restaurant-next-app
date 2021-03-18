import React from 'react';
import styles from './styles.module.scss';

const HomeCopyRights: React.FC = () => (
    <div className={styles['home-copyright']}>
        <ul>
            <li>This project is used as reference only;</li>
            <li>The idea is illustrate how to implement a real project using different programming languages;</li>
            <li>These are merely illustrative images and should not be used in commercial projects.</li>
        </ul>
    </div>
);

export default HomeCopyRights;
