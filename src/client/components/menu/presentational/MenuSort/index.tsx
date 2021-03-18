import React from 'react';
import ButtonCircle from '@/client/components/shared/buttons/ButtonCircle';
import styles from './styles.module.scss';

type MenuSortProps = {
    sortId: string;
    clicked: (sortId: string) => void;
};

const MenuSort: React.FC<MenuSortProps> = (props: MenuSortProps) => (
    <div className={styles['menu-sort']}>
        <div className={styles.item}>
            <ButtonCircle name="Relevant" icon="relevant" selected={props.sortId === 'relevant'} clicked={() => props.clicked('relevant')} />
        </div>

        <div className={styles.item}>
            <ButtonCircle name="A-Z" icon="alpha" selected={props.sortId === 'alpha'} clicked={() => props.clicked('alpha')} />
        </div>

        <div className={styles.item}>
            <ButtonCircle name="Price" icon="price" selected={props.sortId === 'price'} clicked={() => props.clicked('price')} />
        </div>

        <div className={styles.item}>
            <ButtonCircle name="Calorie" icon="calories" selected={props.sortId === 'calories'} clicked={() => props.clicked('calories')} />
        </div>

        <div className={styles.item}>
            <ButtonCircle name="Category" icon="category" selected={props.sortId === 'category'} clicked={() => props.clicked('category')} />
        </div>

        <div className={styles.item}>
            <ButtonCircle name="Review" icon="review" selected={props.sortId === 'review'} clicked={() => props.clicked('review')} />
        </div>
    </div>
);

export default MenuSort;
