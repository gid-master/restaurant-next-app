import React from 'react';
import Image from 'next/image';
import { IUser } from '@/client/interfaces/IUser';
import styles from './styles.module.scss';

type HomeIntroProps = {
    user?: IUser;
};

const HomeIntro: React.FC<HomeIntroProps> = (props: HomeIntroProps) => (
    <div className={styles['home-intro']}>
        <Image src="/assets/logo.png" alt="Restaurant" width={118} height={87} />
        {props.user && <h1>Hey, {props.user.name}</h1>}
        {!props.user && <h1>Welcome</h1>}
        <span>What do you feel like today ?</span>
    </div>
);

export default HomeIntro;
