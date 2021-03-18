import React from 'react';
import HomeShortcutButton from '../HomeShortcutButton';
import styles from './styles.module.scss';

type HomeShortcutProps = {
    clicked: (shortcut: string) => void;
};

const HomeShortcut: React.FC<HomeShortcutProps> = (props: HomeShortcutProps) => (
    <div className={styles['home-shortcut']}>
        <HomeShortcutButton name="Menu" icon="menu" clicked={() => props.clicked('menu')} />

        <HomeShortcutButton name="Account" icon="profile" clicked={() => props.clicked('account')} />

        <HomeShortcutButton name="Install" icon="touch_app" clicked={() => props.clicked('install')} />

        <HomeShortcutButton name="about" icon="help" clicked={() => props.clicked('about')} />
    </div>
);

export default HomeShortcut;
