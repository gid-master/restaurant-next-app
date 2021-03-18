import React from 'react';
import ButtonCircle from '@/client/components/shared/buttons/ButtonCircle';
import styles from './styles.module.scss';

type MenuFilterProps = {
    searchTerm?: string;
    sortId: string;
    changed: (value?: string) => void;
    sorted: () => void;
};

const MenuFilter: React.FC<MenuFilterProps> = (props: MenuFilterProps) => (
    <div className={styles['menu-search']}>
        <div className={styles.wrapper}>
            <input
                value={props.searchTerm ? props.searchTerm : ''}
                onChange={(event) => props.changed(event.target.value)}
                type="text"
                className={styles.input}
                placeholder="search for a product..."
            />
            {!props.searchTerm && <img width="26px" height="26px" src="/assets/icons/dark/search.svg" alt="search" />}
            {props.searchTerm && (
                <img width="26px" height="26px" src="/assets/icons/dark/clear.svg" alt="clear" onClick={() => props.changed(null)} />
            )}
        </div>
        <ButtonCircle icon={props.sortId} small={true} clicked={props.sorted} />
    </div>
);

export default MenuFilter;
