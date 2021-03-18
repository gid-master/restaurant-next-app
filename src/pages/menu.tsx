import React from 'react';
import { GetStaticProps } from 'next';
import MenuContainer from '@/client/components/menu/MenuContainer';
import { IProduct } from '@/client/interfaces/IProduct';
import { ProductService } from '@/server/services';

type MenuProps = {
    products: IProduct[];
};

const Menu: React.FC<MenuProps> = (props: MenuProps) => <MenuContainer products={props.products} />;

export const getStaticProps: GetStaticProps = async () => {
    const response = await ProductService.getAllProducts();
    const products: IProduct[] = JSON.parse(response);
    return {
        props: { products }
        // revalite: 60 // seconds in cache until a new request
    };
};

export default Menu;
