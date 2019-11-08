import React from 'react';
import styles from './Header.module.scss';
import Carousel from './Carousel/Carousel';
import Media from './Media/Media';

const Header = () => {
    return(
        <header className={styles.header} >
            <Carousel nextImageInterval={9}/>
            <Media />            
        </header>
    )
}

export default Header;