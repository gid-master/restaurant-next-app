import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '@/client/interfaces/IUser';
import { IProduct } from '@/client/interfaces/IProduct';
import { getUser } from '@/client/store/ducks/user/selector';
import { getPromotions, getSuggestions, getOffers } from '@/client/store/ducks/product/selector';
import GridRow from '@/client/components/shared/grids/GridRow';
import Container from '@/client/components/shared/layouts/Container';
import Wrapper from '@/client/components/shared/layouts/Wrapper';
import ModalBottomSheet from '@/client/components/shared/buttons/modals/ModalBottomSheet';
import { useRouter } from 'next/router';
import { ShowModal, ShowInstall } from '@/client/store/ducks/settings/actions';
import HomeShortcut from './presentational/HomeShortcut';
import HomeIntro from './presentational/HomeIntro';
import HomeCopyRights from './presentational/HomeCopyRights';

type HomeProps = {
    products?: IProduct[];
};

const HomeContainer: React.FC<HomeProps> = (props: HomeProps) => {
    const dispatch = useDispatch();
    const navigation = useRouter();

    const user: IUser = useSelector(getUser);

    // RENDER CLIENT SIDE
    // const promotions: IProduct[] = useSelector(getPromotions);
    // const suggestions: IProduct[] = useSelector(getSuggestions);
    // const offers: IProduct[] = useSelector(getOffers);

    // RENDER STATIC SERVER SIDE
    const promotions: IProduct[] = props.products.filter((data) => data.previousPrice > 0);
    const suggestions: IProduct[] = props.products.filter((data) => data.suggested);
    const offers: IProduct[] = props.products.filter((data) => data.special);

    const onSeeMoreClicked = () => {
        navigation.push('/menu');
    };

    const onProductClicked = (productSku: string) => {
        navigation.push('/product/' + productSku);
    };

    const onShortcutClicked = (shortcut: string) => {
        switch (shortcut) {
            case 'account':
                navigation.push('/account');
                break;
            case 'menu':
                navigation.push('/menu');
                break;
            case 'install':
                dispatch(ShowInstall(true));
                break;
            case 'about':
                dispatch(ShowModal({ show: true }));
                break;
        }
    };

    return (
        <Wrapper>
            <Container>
                <HomeIntro user={user} />
            </Container>

            <Container>
                <HomeShortcut clicked={onShortcutClicked} />
            </Container>

            <Container title="Promotions" link="see more" clicked={onSeeMoreClicked}>
                <GridRow products={promotions} type="cover" clicked={onProductClicked} />
            </Container>

            <Container title="Suggestions" link="see more" clicked={onSeeMoreClicked}>
                <GridRow products={suggestions} type="vertical" clicked={onProductClicked} />
            </Container>

            <Container title="Special offers" link="see more" clicked={onSeeMoreClicked}>
                <GridRow products={offers} type="horizontal" clicked={onProductClicked} />
            </Container>

            <ModalBottomSheet title="Non-Commercial Use">
                <HomeCopyRights />
            </ModalBottomSheet>
        </Wrapper>
    );
};

export default HomeContainer;
