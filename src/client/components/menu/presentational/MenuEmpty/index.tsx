import React from 'react';
import styles from './styles.module.scss';

const MenuEmpty: React.FC = () => (
    <div className={styles['menu-empty']}>
        <div className={styles.image}>
            <img width="100px" height="100px" src="/assets/icons/primary/thumb_down.svg" alt="menu empty" />
        </div>
        <h2>Sorry, no product found</h2>
        <p>try a different search term</p>
    </div>
);

export default MenuEmpty;
