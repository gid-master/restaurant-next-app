import { IProduct } from '@/client/interfaces/IProduct';

export interface ProductState {
    searchTerm: string;
    sortId: string;
    filterId: string;
    products: IProduct[];
}

export const INITIAL_STATE: ProductState = {
    searchTerm: null,
    sortId: 'relevant',
    filterId: null,
    products: []
};
