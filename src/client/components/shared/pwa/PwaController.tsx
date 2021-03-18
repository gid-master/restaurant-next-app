/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import ModalBottomSheet from '@/client/components/shared/buttons/modals/ModalBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import { getShowInstall } from '@/client/store/ducks/settings/selector';
import { ShowModal, ShowInstall, ShowSnackbar } from '@/client/store/ducks/settings/actions';

import PwaInstall from './PwaInstall';

const PwaContainer: React.FC = () => {
    const dispatch = useDispatch();
    const showInstall: boolean = useSelector(getShowInstall);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event: Event) => handleInstall(event));
        window.addEventListener('online', () => handleOnline());
        window.addEventListener('offline', () => handleOffline());

        return () => {
            window.removeEventListener('beforeinstallprompt', (event: Event) => handleInstall(event));
            window.removeEventListener('online', () => handleOnline());
            window.removeEventListener('offline', () => handleOffline());
        };
    }, []);

    useEffect(() => {
        if (showInstall) {
            dispatch(ShowModal({ id: 'install-modal', show: true }));
            dispatch(ShowInstall(false));
        }
    }, [showInstall]);

    const handleInstall = (event: Event) => {
        event.preventDefault();
        setDeferredPrompt(event);
    };

    const handleOnline = () => {
        dispatch(ShowSnackbar("Woop, you're back online again"));
    };

    const handleOffline = () => {
        dispatch(ShowSnackbar("Ops, You're currently offline"));
    };

    const onInstallClicked = async () => {
        if (!deferredPrompt) {
            return;
        }

        deferredPrompt.prompt();
        await deferredPrompt.userChoise;
        setDeferredPrompt(null);

        dispatch(ShowModal({ show: false }));
    };

    return (
        <div>
            <ModalBottomSheet id="install-modal" title="Install Application">
                <PwaInstall installed={!deferredPrompt} clicked={onInstallClicked} />
            </ModalBottomSheet>
        </div>
    );
};

export default PwaContainer;
