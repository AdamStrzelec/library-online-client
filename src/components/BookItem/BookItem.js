import React from 'react';
import styles from './BookItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let bookDescriptionLimit = (description) => {
    if(description.length > 250){
        return description.substring(0, 250) + '...'
    }
    return description
}

const BookItem = ({book}) => (
    <div className={styles.wrapper}>
        <div className={styles.bookItemImage}>
            <img src={book.image_url} alt={`book item ${book.id}`} />
        </div>

        <div className={styles.bookInfo}>
            <h2 className={styles.bookName}>{book.name}</h2>
            <h3 className={styles.author}>{book.author}</h3>
            <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{bookDescriptionLimit(book.description)}</p>
            </div>
            <p className={styles.rating}>Ocena: {book.rating}</p>
        </div>
        
        <div>
            <button className={styles.addBook}>
                Dodaj do koszyka <FontAwesomeIcon icon="shopping-cart" size="1x" />
            </button>
        </div>
    </div>
)

export default BookItem;