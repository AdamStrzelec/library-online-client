import React from 'react';
import styles from './ModalInput.module.scss';

const ModalInput = ({type, name, label, maxLength, ...props}) => (
    <div className={styles.wrapper}>
        <input
            placeholder=" "
            type={type}
            name={name}
        />
        <label htmlFor={name}>{label}</label>
    </div>
)

export default ModalInput;