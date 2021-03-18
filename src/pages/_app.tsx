import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createWrapper } from 'next-redux-wrapper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/client/store';
import { GetUser } from '@/client/store/ducks/user/effects';
import { GetProducts } from '@/client/store/ducks/product/effects';
import { LoadCart } from '@/client/store/ducks/checkout/effects';
import { getCartQuantity } from '@/client/store/ducks/checkout/selector';
import ModalSnackbar from '@/client/components/shared/buttons/modals/ModalSnackbar/index';
import ModalBackdrop from '@/client/components/shared/buttons/modals/ModalBackdrop/index';
import Toolbar from '@/client/components/shared/layouts/Toolbar/index';
import PwaContainer from '@/client/components/shared/pwa/PwaController';
import createMock from '@/mocks';
import './../../styles/index.scss';

const isMockEnabled = Boolean(process.env.NEXT_PUBLIC_BACKEND_TARGET === 'mock');
if (isMockEnabled) {
    createMock();
}

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const cartQuantity: number = useSelector(getCartQuantity);
    const [toolbarId, setToolbarId] = useState('home');
    const [showToolbar, setShowToolbar] = useState(true);

    useEffect(() => {
        dispatch(GetUser());
        dispatch(GetProducts());
        dispatch(LoadCart());
    }, []);

    useEffect(() => {
        const route: string = location.pathname.split('/')[1];

        setToolbarId(route);
        setShowToolbar(route !== 'product');
        // window.scrollTo(0, 0);
    }, [router]);

    const onToolbarClicked = (toolbar: string) => {
        router.push(`/${toolbar || ''}`);
    };

    return (
        <Provider store={store}>
            <Head>
                <title>{process.env.NEXT_PUBLIC_TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <ModalSnackbar />
            <ModalBackdrop />
            <PwaContainer />
            {showToolbar && <Toolbar cartQuantity={cartQuantity} toolbarId={toolbarId} clicked={onToolbarClicked} />}
        </Provider>
    );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
