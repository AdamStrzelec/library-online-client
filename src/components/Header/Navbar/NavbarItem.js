import React from 'react';
import styles from './NavbarItem.module.scss';

const NavbarItem = ({link}) => (
    <li className={styles.wrapper}>
        <a href={'facebook.com'}>{link}</a>
    </li>
)

export default NavbarItem;