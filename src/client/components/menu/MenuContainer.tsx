import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SetSort, SetFilter, SetSearchTerm } from '@/client/store/ducks/product/actions';
import { getFilterId, getSortId, getSearchTerm } from '@/client/store/ducks/product/selector';
import { IProduct } from '@/client/interfaces/IProduct';
import { ShowModal } from '@/client/store/ducks/settings/actions';
import Wrapper from '@/client/components/shared/layouts/Wrapper';
import GridList from '@/client/components/shared/grids/GridList';
import Container from '@/client/components/shared/layouts/Container';
import Block from '@/client/components/shared/layouts/Block';
import ModalBottomSheet from '@/client/components/shared/buttons/modals/ModalBottomSheet';
import MenuFilter from './presentational/MenuFilter';
import MenuSearch from './presentational/MenuSearch';
import MenuSort from './presentational/MenuSort';
import MenuEmpty from './presentational/MenuEmpty';

type MenuProps = {
    products: IProduct[];
};

const MenuContainer: React.FC<MenuProps> = (props: MenuProps) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const categories: string[] = ['salads', 'snacks', 'meals', 'burgers', 'drinks', 'dessert'];
    const filterId: string = useSelector(getFilterId);
    const sortId: string = useSelector(getSortId);
    const searchTerm: string = useSelector(getSearchTerm);

    const products: IProduct[] = props.products
        .filter(
            (data: IProduct) =>
                // filter
                (!filterId || data.category === filterId) &&
                // search
                (!searchTerm || data.name.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1)
        )
        .sort((a: IProduct, b: IProduct): number => {
            switch (sortId) {
                case 'alpha':
                    return a.name > b.name ? 1 : -1;
                case 'price':
                    return a.price - b.price;
                case 'calories':
                    return a.calories - b.calories;
                case 'category':
                    return a.category > b.category ? 1 : -1;
                case 'review':
                    return b.reviews.totalRating / b.reviews.totalReviews - a.reviews.totalRating / a.reviews.totalReviews;
                default:
                    return 1;
            }
        });

    const onProductClicked = (productSku: string) => {
        router.push(`/product/${productSku}`);
    };

    const onSearchChanged = (search: string) => {
        dispatch(SetSearchTerm(search));
    };

    const onFilterClicked = (category: string) => {
        dispatch(SetFilter(category));
    };

    const onOpenSortClicked = () => {
        dispatch(ShowModal({ show: true }));
    };

    const onSortClicked = (sort: string) => {
        dispatch(SetSort(sort));
        dispatch(ShowModal({ show: false }));
    };

    return (
        <Wrapper>
            <Container>
                <MenuSearch sortId={sortId} searchTerm={searchTerm} changed={onSearchChanged} sorted={onOpenSortClicked} />
            </Container>

            {products.length === 0 && (
                <Container>
                    <MenuEmpty />
                </Container>
            )}
            {products.length > 0 && (
                <div>
                    <Container>
                        <MenuFilter categories={categories} filterId={filterId} clicked={onFilterClicked} />
                    </Container>

                    <Container>
                        <Block>
                            <GridList products={products} clicked={onProductClicked} />
                        </Block>
                    </Container>
                </div>
            )}

            <ModalBottomSheet title="Sort Products">
                <MenuSort sortId={sortId} clicked={onSortClicked} />
            </ModalBottomSheet>
        </Wrapper>
    );
};

export default MenuContainer;
