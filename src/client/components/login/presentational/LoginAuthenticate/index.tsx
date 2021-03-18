import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import { IAuthentication } from '@/client/interfaces/IUser';
import styles from './styles.module.scss';

type LoginAuthenticationProps = {
    processing: boolean;
    message: string;
    authenticateClicked: (authentication: IAuthentication) => void;
    enableRegisterClicked: () => void;
};

const LoginAuthentication: React.FC<LoginAuthenticationProps> = (props: LoginAuthenticationProps) => {
    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const submitForm = handleSubmit((formData: IAuthentication) => {
        props.authenticateClicked(formData);
    });

    return (
        <form noValidate className={styles['login-authentication']} onSubmit={submitForm}>
            <h2>My Account</h2>

            {props.message && (
                <span className={styles['main-message']}>
                    <small>{props.message}</small>
                </span>
            )}

            <div className={classNames(styles.controller, { [styles.error]: errors.email })}>
                <input placeholder="Email" name="email" type="text" className={styles.input} disabled={props.processing} ref={register} />
                <span className={styles.message}>
                    <small>Email is required.</small>
                </span>
            </div>

            <div className={classNames(styles.controller, { [styles.error]: errors.password })}>
                <input placeholder="Password" name="password" type="password" className={styles.input} disabled={props.processing} ref={register} />
                <span className={styles.message}>
                    <small>Password is required.</small>
                </span>
            </div>

            <ButtonStandard name="Access my account" disabled={props.processing} submit={true} center={true} />

            <span className={styles.account}>Don't you have an account yet ?</span>

            <ButtonStandard
                name="Create an account"
                disabled={props.processing}
                center={true}
                transparent={true}
                clicked={props.enableRegisterClicked}
            />

            <span className={styles.forgot}>forgot your password</span>
        </form>
    );
};

export default LoginAuthentication;
