import React from 'react';
import HomeContainer from '@/client/components/home/HomeContainer';
import { IProduct } from '@/client/interfaces/IProduct';
import { GetStaticProps } from 'next';
import { ProductService } from '@/server/services';

type HomeProps = {
    products: IProduct[];
};

const Home: React.FC<HomeProps> = (props: HomeProps) => <HomeContainer products={props.products} />;

export const getStaticProps: GetStaticProps = async () => {
    const response = await ProductService.getAllProducts();
    const products: IProduct[] = JSON.parse(response);
    return {
        props: { products }
        // revalite: 60 // seconds in cache until a new request
    };
};

export default Home;
