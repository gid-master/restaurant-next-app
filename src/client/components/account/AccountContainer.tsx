import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '@/client/components/shared/layouts/Wrapper';
import Container from '@/client/components/shared/layouts/Container';
import Block from '@/client/components/shared/layouts/Block';
import { getOrders, getOrdersSummary } from '@/client/store/ducks/account/selector';
import { getUser } from '@/client/store/ducks/user/selector';
import { IUser } from '@/client/interfaces/IUser';
import { IOrder, IOrderReview, IOrderSummary } from '@/client/interfaces/IOrder';
import { GetOrders, SetReview } from '@/client/store/ducks/account/effects';
import { Logout } from '@/client/store/ducks/user/effects';
import { useRouter } from 'next/router';
import AccountBio from './presentational/AccountBio';
import AccountOrderSummary from './presentational/AccountOrderSummary';
import AccountOrderAccordion from './presentational/AccountOrderAccordion';

const AccountContainer: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useRouter();

    const user: IUser = useSelector(getUser);
    const orders: IOrder[] = useSelector(getOrders);
    const ordersSummary: IOrderSummary = useSelector(getOrdersSummary);
    const [collapse, setCollapse] = useState(null);

    useEffect(() => {
        if (!user) {
            navigation.push('/login');
        }
    }, [user]);

    useEffect(() => {
        dispatch(GetOrders());
    }, []);

    const onLogoutClicked = () => {
        dispatch(Logout());
        navigation.push('/login');
    };

    const onOrderClicked = (orderId: string) => {
        setCollapse(orderId);
    };

    const onReviewClicked = (review: IOrderReview) => {
        dispatch(SetReview(review));
    };

    return (
        <Wrapper>
            <Container>
                <Block>
                    <AccountBio user={user} clicked={onLogoutClicked} />
                </Block>
            </Container>

            <Container>
                <Block>
                    <AccountOrderSummary ordersSummary={ordersSummary} />
                </Block>
            </Container>

            <Container>
                <Block title="Completed Orders">
                    <AccountOrderAccordion collapse={collapse} orders={orders} orderClicked={onOrderClicked} reviewClicked={onReviewClicked} />
                </Block>
            </Container>
        </Wrapper>
    );
};

export default AccountContainer;
