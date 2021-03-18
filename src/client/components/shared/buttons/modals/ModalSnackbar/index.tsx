import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getSnackbar } from '@/client/store/ducks/settings/selector';
import { ShowSnackbar } from '@/client/store/ducks/settings/actions';
import styles from './styles.module.scss';

const ModalSnackbar: React.FC = () => {
    let timeout: number = null;
    const duration: number = 5000;
    const dispatch = useDispatch();
    const message: string = useSelector(getSnackbar);

    useEffect(() => {
        delaySnackBar();
    }, [message]);

    const delaySnackBar = async () => {
        if (message) {
            timeout = window.setTimeout(() => closeSnackBar(), duration);
        }
    };

    const closeSnackBar = () => {
        window.clearTimeout(timeout);
        dispatch(ShowSnackbar(null));
    };

    return (
        <div className={classNames(styles['modal-snackbar'], { [styles.show]: Boolean(message) })}>
            <span>{message}</span>
            <img width="16px" height="16px" src={'/assets/icons/light/clear.svg'} onClick={closeSnackBar} alt="close" />
        </div>
    );
};
export default ModalSnackbar;
