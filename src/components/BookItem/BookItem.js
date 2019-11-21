import React from 'react';
import styles from './BookItem.module.scss';

let bookDescriptionLimit = (description) => {
    return description.substring(0, 250) + '...'
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
        </div>
        
        <div>
            <button>Dodaj do koszyka</button>
        </div>
    </div>
)

export default BookItem;