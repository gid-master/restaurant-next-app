import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IProductAdditional } from '@/client/interfaces/IProduct';

import Container from '@/client/components/shared/layouts/Container';
import Wrapper from '@/client/components/shared/layouts/Wrapper';
import Block from '@/client/components/shared/layouts/Block';
import GridRow from '@/client/components/shared/grids/GridRow';

import { formatCapitalize } from '@/client/utils/FormatUtil';
import { getUid } from '@/client/utils/RandomUtil';
import { SetCart } from '@/client/store/ducks/checkout/effects';

import ProductHeader from './presentational/ProductHeader';
import ProductMacro from './presentational/ProductMacro';
import ProductIngredients from './presentational/ProductIngredients/index';
import ProductAdditional from './presentational/ProductAdditional';
import ProductComments from './presentational/ProductComments';
import ProductReview from './presentational/ProductReview/index';
import ProductAddToCart from './presentational/ProductAddToCart';
import { SetPreferredCart } from '@/client/store/ducks/checkout/actions';
import { getPreferredCart } from '@/client/store/ducks/checkout/selector';
import { ICart } from '@/client/interfaces/ICart';

type ProductProps = {
    product: IProduct;
    fromCategories: IProduct[];
};

const ProductContainer: React.FC<ProductProps> = (props: ProductProps) => {
    const dispatch = useDispatch();
    const navigation = useRouter();

    // const id: string = navigation.query.id as string;
    const cartId: string = navigation.query.edit as string;
    const [product, setProduct] = useState(props.product);

    const productsFromCategories: IProduct[] = props.fromCategories;
    const cart: ICart = useSelector(getPreferredCart);

    const total = (): number => {
        const additionals: number = product.additionals.reduce(
            (value: number, additional: IProductAdditional) => value + additional.quantity * additional.price,
            0
        );
        return (additionals + product.price) * product.quantity;
    };

    const onBackClicked = () => {
        navigation.push('/menu');
        // navigation.back();
        // window.history.back();
    };

    const onIncrementClicked = (additionalId: string, increment: number) => {
        // dispatch(SetProductAdditionalIncrement({ id: additionalId, increment }));

        setProduct({
            ...product,
            additionals: [
                ...product.additionals.map((data) => ({
                    ...data,
                    quantity: data.id === additionalId ? data.quantity + increment : data.quantity
                }))
            ]
        });
    };

    const onCommentsChanged = (comments: string) => {
        // dispatch(SetProductComments(comments));
        setProduct({
            ...product,
            comments: comments
        });
    };

    const onProductClicked = (productSku: string) => {
        navigation.push(`/product/${productSku}`);
    };

    const onProductIncrementClicked = (increment: number) => {
        // dispatch(SetProductQuantity(increment));
        setProduct({
            ...product,
            quantity: product.quantity + increment
        });
    };

    const onAddClicked = () => {
        dispatch(SetCart({ id: cartId || getUid(), product }));
        navigation.push('/checkout');
    };

    useEffect(() => {
        if (cart) {
            setProduct(cart.product);
        }

        if (cartId) {
            dispatch(SetPreferredCart(cartId));
        }
    }, [cartId, cart]);

    return (
        <div>
            {product && (
                <Wrapper>
                    <Container>
                        <ProductHeader product={product} clicked={onBackClicked} />
                    </Container>
                    <Container>
                        <Block>
                            <ProductMacro product={product} />
                        </Block>
                    </Container>
                    <Container>
                        <Block title="Ingredients">
                            <ProductIngredients ingredients={product.ingredients} />
                        </Block>
                    </Container>
                    <Container>
                        <Block title="Additional" link={`max ${product.maxAdditionals} items`}>
                            <ProductAdditional
                                maxAdditionals={product.maxAdditionals}
                                additionals={product.additionals}
                                clicked={onIncrementClicked}
                            />
                        </Block>
                    </Container>
                    <Container>
                        <Block title="Would you like to change ?" subtitle="let our chefs to know">
                            <ProductComments comments={product.comments} changed={onCommentsChanged} />
                        </Block>
                    </Container>
                    <Container>
                        <Block title="Clients Reviews">
                            <ProductReview reviews={product.reviews} />
                        </Block>
                    </Container>
                    <Container title={`Other ${formatCapitalize(product.category)}`}>
                        <GridRow type="vertical" products={productsFromCategories} clicked={onProductClicked} />
                    </Container>

                    <ProductAddToCart
                        total={total()}
                        quantity={product.quantity}
                        incrementClicked={onProductIncrementClicked}
                        addClicked={onAddClicked}
                    />
                </Wrapper>
            )}
        </div>
    );
};

export default ProductContainer;
