import React, { useEffect } from 'react';
import classNames from 'classnames';
import { IModal } from '@/client/interfaces/IModal';
import { useDispatch, useSelector } from 'react-redux';
import { getModal } from '@/client/store/ducks/settings/selector';
import { ShowModal } from '@/client/store/ducks/settings/actions';
import styles from './styles.module.scss';

const ModalBackdrop: React.FC = () => {
    const dispatch = useDispatch();
    const modal: IModal = useSelector(getModal);

    useEffect(() => {
        disableScroll(modal && modal.show);
    }, [modal]);

    const onBackdropClicked = () => {
        if (modal.disableClick) {
            return;
        }

        dispatch(ShowModal({ show: false }));
    };

    const disableScroll = (disable: boolean) => {
        document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    return <div className={classNames(styles['modal-backdrop'], { [styles.show]: modal && modal.show })} onClick={onBackdropClicked} />;
};

export default ModalBackdrop;
