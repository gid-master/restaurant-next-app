import React from 'react';
import { useSelector } from 'react-redux';
import { getModal } from '@/client/store/ducks/settings/selector';
import classNames from 'classnames';
import { IModal } from '@/client/interfaces/IModal';
import ButtonStandard from '../../ButtonStandard';
import styles from './styles.module.scss';

type ModalSuccessProps = {
    id?: string;
    title: string;
    message: string;
    button: string;
    processed: boolean;
    clicked: () => void;
};

const ModalSuccess: React.FC<ModalSuccessProps> = (props: ModalSuccessProps) => {
    const modal: IModal = useSelector(getModal);

    return (
        <div
            className={classNames(styles['modal-success'], {
                [styles.show]: modal && modal.show && modal.id === props.id
            })}>
            <div className={styles.content}>
                <h2>{props.title}</h2>

                <span className={styles.success}>
                    {props.processed && (
                        <div className={styles['success-checkmark']}>
                            <div className={styles['check-icon']}>
                                <span className={`${styles['icon-line']} ${styles['line-tip']}`} />
                                <span className={`${styles['icon-line']} ${styles['line-long']}`} />
                                <div className={styles['icon-circle']} />
                                <div className={styles['icon-fix']} />
                            </div>
                        </div>
                    )}
                    {!props.processed && (
                        <div className={styles['processing-ripple']}>
                            <div />
                            <div />
                        </div>
                    )}
                    <span className={styles.text}>{props.message}</span>
                </span>

                {props.button && <ButtonStandard name={props.button} center={true} disabled={!props.processed} clicked={props.clicked} />}
            </div>
        </div>
    );
};

export default ModalSuccess;
