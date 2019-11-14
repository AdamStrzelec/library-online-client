import React from 'react';
import './App.css';
import AppContext from '../../context';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowAltCircleLeft, faArrowAltCircleRight, faUser, faUserCog, faSortDown, faTimes} from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

library.add(faArrowAltCircleLeft, faArrowAltCircleRight, faUser, faUserCog, faSortDown, faTimes)

const modalTypes = {
  login: 'login',
  register: 'register',
}

class App extends React.Component {

  state = {
    user: {
      userName: 'adastr96',
      firstName: 'Adam',
      lastName: 'Strzelec',
      userStatus: 'admin'
    },
    userStatus: 'unlogged',
    isModalOpen: false,
    modalType: modalTypes.login,
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  openLoginModal = () => {
    this.setState({
      modalType: modalTypes.login,
      isModalOpen: true
    })
  }
  openRegisterModal = () => {
    this.setState({
      modalType: modalTypes.register,
      isModalOpen: true
    })
  }
  render(){
    const contextElements = {
      ...this.state,
      openLoginModal: this.openLoginModal,
      openRegisterModal: this.openRegisterModal
    }
    return (
      
      <div className="App">
        <AppContext.Provider value={contextElements}>
          <Header />
          {this.state.isModalOpen && <Modal closeModalFn={this.closeModal} modalType={this.state.modalType}/>}
          <h1>hello</h1>
        </AppContext.Provider>
      </div>

    );
  }
}

export default App;
