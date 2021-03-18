import React from 'react';
import styles from './styles.module.scss';

type ProductCommentsProps = {
    comments: string;
    changed: (value: string) => void;
};

const ProductComments: React.FC<ProductCommentsProps> = (props: ProductCommentsProps) => (
    <div className={styles['product-comments']}>
        <textarea
            className={styles.input}
            placeholder="Example: take onion off"
            rows={7}
            value={props.comments}
            onChange={(event) => props.changed(event.target.value)}
        />
    </div>
);

export default ProductComments;
