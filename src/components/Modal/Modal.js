import React from 'react';
import styles from './Modal.module.scss';
import ModalInput from './ModalInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Modal = ({closeModalFn, modalType}) => {
    function submitForm(e){
        e.preventDefault();
        console.log(e.target[1].value);
    }
    return(
        <div className={styles.modalBackground}>
        <div className={styles.modalWindow}>
            <button className={styles.closeModalButton} onClick={closeModalFn}><FontAwesomeIcon icon="times" size="2x" /></button>
            <h2 className={styles.modalTitle}>{modalType === 'login' ? 'Logowanie' : 'Rejestracja'}</h2>
            <form autoComplete="off" onSubmit={submitForm}>
                <ModalInput type='text' name='userName' label='Nazwa użytkownika'/>
                {modalType === 'register' && <ModalInput type='text' name='firstName' label='Imię'/>}
                {modalType === 'register' && <ModalInput type='text' name='lastName' label='Nazwisko'/>}
                {modalType === 'register' && <ModalInput type='text' name='email' label='Adres e-mail'/>}
                {modalType === 'register' && <ModalInput type='number' name='phoneNumber' label='Numer telefonu'/>}
                {modalType === 'register' && <ModalInput type='text' name='place' label='Miejscowość'/>}
                {modalType === 'register' && <div className={styles.address}>
                        <div className={styles.street}><ModalInput className={styles.street} type='text' name='street' label='Ulica'/></div>
                        <div className={styles.homeNumber}><ModalInput type='number' name='homeNumber' label='Numer'/></div>
                    </div>}
                <ModalInput type='password' name='userPassword' label='Hasło użytkownika'/>
                {modalType === 'register' && <ModalInput type='password' name='userPasswordRepeat' label='Powtórz hasło'/>}
                <button type="submit" className={styles.submitButton}>{modalType==='login' ? 'Zaloguj się' : 'Zarejestruj się'}</button>
            </form>
        </div>
    </div>
    )
}

export default Modal;