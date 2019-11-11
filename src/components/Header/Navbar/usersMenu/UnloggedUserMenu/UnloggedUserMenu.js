import React from 'react';
import styles from './UnloggedUserMenu.module.scss';

const UnloggedUserMenu = () => (
    <div className={styles.wrapper}>
        <button className={styles.loginButton}>Logowanie</button>
        <button className={styles.registerButton}>Rejestracja</button>
    </div>
)
export default UnloggedUserMenu;