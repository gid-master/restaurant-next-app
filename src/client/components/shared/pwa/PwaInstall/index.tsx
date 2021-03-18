import React from 'react';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import styles from './styles.module.scss';

type PwaInstallProps = {
    installed: boolean;
    clicked: () => void;
};

const PwaInstall: React.FC<PwaInstallProps> = (props: PwaInstallProps) => (
    <div className={styles['pwa-install']}>
        {props.installed && (
            <p className={styles.description}>
                You have already installed the application and you can access it through the home screen icon in your device.
            </p>
        )}

        {!props.installed && (
            <p className={styles.description}>Install the application and you can access it through the home screen icon in your device.</p>
        )}

        <ButtonStandard icon="touch_app" name="install application" disabled={props.installed} center={true} clicked={props.clicked} />
    </div>
);

export default PwaInstall;
