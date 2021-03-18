import React, { useState, forwardRef, Ref, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles.module.scss';

type CheckoutGiftCardProps = {
    disabled: boolean;
};

export interface RefGiftCard {
    resetForm: () => void;
    submitForm: () => Promise<void>;
    getData: () => string;
    isValidForm: () => boolean;
}

const CheckoutGiftCard = forwardRef((props: CheckoutGiftCardProps, ref: Ref<RefGiftCard>) => {
    useImperativeHandle(ref, () => ({ resetForm, submitForm, getData, isValidForm }));
    const [data, setData] = useState(null);

    const schema = yup.object().shape({
        giftCard: yup.string().required()
    });

    const { register, handleSubmit, errors, reset, formState } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        reValidateMode: 'onSubmit'
    });

    const getData = (): string => data;

    const resetForm = () => {
        reset();
        setData(null);
    };

    const submitForm = handleSubmit((formData) => {
        setData(formData.giftCard);
    });

    const isValidForm = (): boolean => Object.keys(formState.errors).length === 0;

    return (
        <form noValidate className={styles['gift-card-form']}>
            <div className={classNames(styles.controller, { [styles.error]: errors.giftCard })}>
                <label className={styles.label}>
                    <small>Type the gift code</small>
                </label>
                <input name="giftCard" type="text" className={styles.input} disabled={props.disabled} ref={register} />
                <span className={styles.message}>
                    <small>Gift card is required.</small>
                </span>
            </div>
        </form>
    );
});

export default CheckoutGiftCard;
