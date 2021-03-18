import React from 'react';
import { IProduct } from '@/client/interfaces/IProduct';
import CardDetails from '../../cards/CardDetails';
import styles from './styles.module.scss';

type GridListProps = {
    products: IProduct[];
    clicked: (productSku: string) => void;
};

const GridList: React.FC<GridListProps> = (props: GridListProps) => (
    <div className={styles['grid-list']}>
        {props.products.map((product: IProduct, index: number) => (
            <div key={product.id}>
                <CardDetails product={product} clicked={(productSku: string) => props.clicked(productSku)} />
                {index < props.products.length - 1 && <hr />}
            </div>
        ))}
    </div>
);

export default GridList;
