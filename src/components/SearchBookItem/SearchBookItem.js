import React from 'react';
import styles from './SearchBookItem.module.scss';
import BookItemAuthor from '../BookItem/BookItemAuthor';
import { NavLink } from 'react-router-dom';
import BookItem from '../BookItem/BookItem';

const SearchBookItem = ({book}) => (
    <div className={styles.wrapper}>
        <div className={styles.bookImage}>
            <img src={book.bookImageUrl} alt={book._id}/>
        </div>
        <div onClick={()=>{console.log(book)}} className={styles.bookInfoLeft}>
            <NavLink className={styles.bookName} to={'/book/'+book.id}>{book.name}</NavLink>
            <div className={styles.authors}>
                <ul>
                    {book.authors.map(author => <li><p><BookItemAuthor authorId={author.author}/></p></li>)}
                </ul>
            </div>
        </div>
        <div className={styles.bookInfoRight}>
            <p>cena: <strong>{book.price} zł</strong></p>
            <p>średnia ocen: <strong>{book.averageGrade} / 5</strong></p>
        </div>
    </div>
)

export default SearchBookItem;