import React from 'react';
import styles from './LoggedUserPanel.module.scss';
import AppContext from '../../context';


class LoggedUserPanel extends React.Component{


    render(){
        return(
            <AppContext.Consumer>
                {context => (
                <div className={styles.wrapper} >
                    <ul>
                        <li>Moje konto</li>
                        <li>Moje książki</li>
                        <li>
                            <button onClick={context.logoutFn}>
                                Wyloguj się
                            </button>
                        </li>
                    </ul>

                </div>
                )}
            </AppContext.Consumer>

        )
    }
}

export default LoggedUserPanel;