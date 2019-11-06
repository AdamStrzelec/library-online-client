import React from 'react';
import styles from './Header.module.scss';
import Carousel from './Carousel/Carousel';

const Header = () => {
    return(
        <header className={styles.header} >
            <Carousel nextImageInterval={9}/>            
        </header>
    )
}

export default Header;