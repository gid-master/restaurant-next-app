import React from 'react';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import { IUser } from '@/client/interfaces/IUser';
import styles from './styles.module.scss';

type AccountBioProps = {
    user: IUser;
    clicked: () => void;
};

const AccountBio: React.FC<AccountBioProps> = (props: AccountBioProps) => (
    <div className={styles['account-bio']}>
        <h2 className={styles.name}>{props.user?.name}</h2>
        <span className={styles.email}>{props.user?.email}</span>

        <ButtonStandard name="Logout application" center={true} clicked={props.clicked} />
    </div>
);

export default AccountBio;
