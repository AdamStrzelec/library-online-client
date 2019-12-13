import React from 'react';
import styles from './LoggedUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoggedUser = ({userName, userType}) => (
    <div className={styles.wrapper}>
        <p className={styles.userName}>{userName}</p>
        <div className={styles.arrowIcon}>
            <FontAwesomeIcon icon="sort-down" />
        </div>
        <div className={styles.userIcon}>
            {userType==='user'?
                <FontAwesomeIcon icon="user" size="2x" />
               : <FontAwesomeIcon icon="user-cog" size="2x" />}
        </div>
    </div>
)

export default LoggedUser;