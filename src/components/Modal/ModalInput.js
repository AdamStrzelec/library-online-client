import React from 'react';
import styles from './ModalInput.module.scss';

const ModalInput = ({type, name, label, maxLength, setValue, ...props}) => (
    <div className={styles.wrapper}>
        <input onChange={setValue}
            placeholder=" "
            type={type}
            name={name}
            required
        />
        <label htmlFor={name}>{label}</label>
    </div>
)

export default ModalInput;