import React from 'react';
import styles from './Navbar.module.scss';
import AppContext from '../../../context';
import NavbarItem from './NavbarItem';
import UnloggedUserMenu from './usersMenu/UnloggedUserMenu/UnloggedUserMenu';
import LoggedUser from './usersMenu/LoggedUser/LoggedUser';
// import ReactDOM from 'react-dom';

const navbarItems = [
    'HOME',
    'O NAS',
    'TOP 10',
    'KONTAKT',
];

class Navbar extends React.Component{
    componentDidMount = () => {
        // var n = ReactDOM.findDOMNode(this);
        // console.log(n.offsetTop);
      };
    render(){

        return(
            
            <AppContext.Consumer>
            {(context)=>(
                <div className={styles.wrapper} >
                    <div className={styles.navbar}>
                        <ul>
                            <NavbarItem link={navbarItems[0]} />
                            <NavbarItem link={navbarItems[1]} />
                            <NavbarItem link={navbarItems[2]} />
                            <NavbarItem link={navbarItems[3]} />
                        </ul>
                    </div>
                    <div className={styles.userMenu}>
                        {context.userStatus==='logged' ? 
                            <LoggedUser userName={context.user.userName} userStatus={context.user.userStatus}/>:
                            <UnloggedUserMenu
                            openLoginModalFn={context.openLoginModal}
                            openRegisterModalFn={context.openRegisterModal}/>
                        }
                    </div>
                    
                </div>
            )}
        </AppContext.Consumer>
        )
    }
}
export default Navbar;