import React, { useEffect } from 'react';
import ButtonBadge from '@/client/components/shared/buttons/ButtonBadge';
import { scrollToLeft } from '@/client/utils/AnimationUtil';
import styles from './styles.module.scss';

type MenuFilterProps = {
    filterId: string;
    categories: string[];
    clicked: (category?: string) => void;
};

const MenuFilter: React.FC<MenuFilterProps> = (props: MenuFilterProps) => {
    useEffect(() => {
        scrollElementTo(props.filterId);
    }, [props.filterId]);

    const scrollElementTo = (id?: string) => {
        const target: HTMLElement = document.getElementById('filter');
        const element: HTMLElement = document.getElementById(id || 'all');
        const x: number = element ? element.offsetLeft - 25 : 0;

        // auxiliar vanila script to have a smooth scroll across all devices
        scrollToLeft(target, x);

        // doesn't work on ios devices, works only for web
        // target.scrollTo({ left: x, behavior: "smooth" });
    };

    return (
        <div id="filter" className={styles['menu-filter']}>
            <div id="all" className={styles.item}>
                <ButtonBadge icon="all" name="all products" selected={!props.filterId} clicked={() => props.clicked()} />
            </div>
            {props.categories.map((category: string) => (
                <div className={styles.item} key={category} id={category}>
                    <ButtonBadge icon={category} name={category} selected={props.filterId === category} clicked={() => props.clicked(category)} />
                </div>
            ))}
        </div>
    );
};

export default MenuFilter;
