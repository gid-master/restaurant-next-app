import React from 'react';
import classNames from 'classnames';
import { IProduct } from '@/client/interfaces/IProduct';
import CardCover from '../../cards/CardCover';
import CardVertical from '../../cards/CardVertical';
import CardHorizontal from '../../cards/CardHorizontal';
import styles from './styles.module.scss';

type GridRowProps = {
    type: 'vertical' | 'horizontal' | 'cover';
    products: IProduct[];
    clicked: (productSku: string) => void;
};

const GridRow: React.FC<GridRowProps> = (props: GridRowProps) => (
    <div className={styles['grid-row']}>
        {props.products.map((product: IProduct) => (
            <div
                key={product.id}
                className={classNames(styles.item, {
                    [styles.cover]: props.type === 'cover',
                    [styles.vertical]: props.type === 'vertical',
                    [styles.horizontal]: props.type === 'horizontal'
                })}>
                {props.type === 'cover' && <CardCover product={product} clicked={(productSku: string) => props.clicked(productSku)} />}

                {props.type === 'vertical' && <CardVertical product={product} clicked={(productSku: string) => props.clicked(productSku)} />}

                {props.type === 'horizontal' && <CardHorizontal product={product} clicked={(productSku: string) => props.clicked(productSku)} />}
            </div>
        ))}
    </div>
);

export default GridRow;
