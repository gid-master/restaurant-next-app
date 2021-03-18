import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ICreditCard } from '@/client/interfaces/ICheckout';
import styles from './styles.module.scss';

type CheckoutCreditCardProps = {
    disabled: boolean;
};

export interface RefCreditCard {
    resetForm: () => void;
    submitForm: () => Promise<void>;
    getData: () => ICreditCard;
    isValidForm: () => boolean;
}

const CheckoutCreditCard = forwardRef((props: CheckoutCreditCardProps, ref: Ref<RefCreditCard>) => {
    useImperativeHandle(ref, () => ({ resetForm, submitForm, getData, isValidForm }));
    const [data, setData] = useState(null);

    const schema = yup.object().shape({
        nameHolder: yup.string().required(),
        cardNumber: yup.string().required(),
        cvv: yup.string().required(),
        expiration: yup.string().required()
    });

    const { register, handleSubmit, errors, reset, formState } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        reValidateMode: 'onSubmit'
    });

    const getData = (): ICreditCard => data;

    const resetForm = () => {
        reset();
        setData(null);
    };

    const submitForm = handleSubmit((formData) => {
        setData(formData);
    });

    const isValidForm = (): boolean => Object.keys(formState.errors).length === 0;

    return (
        <form noValidate className={styles['credit-card-form']}>
            <div className={classNames(styles.controller, { [styles.error]: errors.nameHolder })}>
                <label className={styles.label}>
                    <small>Name on card</small>
                </label>
                <input name="nameHolder" type="text" className={styles.input} disabled={props.disabled} ref={register} />
                <span className={styles.message}>
                    <small>Name on card is required.</small>
                </span>
            </div>

            <div className={classNames(styles.controller, { [styles.error]: errors.cardNumber })}>
                <label className={styles.label}>
                    <small>Card number</small>
                </label>
                <input name="cardNumber" type="text" className={styles.input} disabled={props.disabled} ref={register} />
                <span className={styles.message}>
                    <small>Card number is required.</small>
                </span>
            </div>

            <div
                className={classNames(`${styles.controller} ${styles.half}`, {
                    [styles.error]: errors.cvv
                })}>
                <label className={styles.label}>
                    <small>Card number</small>
                </label>
                <input name="cvv" type="text" className={styles.input} disabled={props.disabled} ref={register} />
                <span className={styles.message}>
                    <small>CVV is required.</small>
                </span>
            </div>

            <div
                className={classNames(`${styles.controller} ${styles.half}`, {
                    [styles.error]: errors.expiration
                })}>
                <label className={styles.label}>
                    <small>Expiration</small>
                </label>
                <input name="expiration" type="text" className={styles.input} disabled={props.disabled} ref={register} />
                <span className={styles.message}>
                    <small>Date is required.</small>
                </span>
            </div>
        </form>
    );
});

export default CheckoutCreditCard;
