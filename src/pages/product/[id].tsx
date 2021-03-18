import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ProductContainer from '@/client/components/product/ProductContainer';
import { IProduct } from '@/client/interfaces/IProduct';
import { ProductService } from '@/server/services';

type ProductProps = {
    product: IProduct;
    fromCategories: IProduct[];
};

const Product: React.FC<ProductProps> = (props: ProductProps) => <ProductContainer product={props.product} fromCategories={props.fromCategories} />;

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await ProductService.getAllProducts();
    const products: IProduct[] = JSON.parse(response);

    const paths = products.map((product: IProduct) => ({
        params: { id: product.sku }
    }));

    return {
        paths: paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const sku: string = params.id as string;
    const responseProduct = await ProductService.getProductBySku(sku);
    const product: IProduct = JSON.parse(responseProduct);

    const responseFromCategories = await ProductService.getProductFromCategory(product.sku, product.category);
    const fromCategories: IProduct[] = JSON.parse(responseFromCategories);

    return {
        props: { product, fromCategories }
        // revalite: 60 // seconds in cache until a new request
    };
};

export default Product;
