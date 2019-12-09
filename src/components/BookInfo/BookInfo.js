import React from 'react';
import styles from './BookInfo.module.scss';
import * as api from '../../helpers/booksApi';
import BookItemAuthor from '../BookItem/BookItemAuthor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BookInfo extends React.Component {

    state = {
        book: {},
        bookInfoFetched: false,
    }

    componentDidMount = async () => {
        const bookJson = await api.getBookById(this.props.bookId);
        this.setState({book: bookJson.book})
        this.setState({bookInfoFetched: true});
    }

    render(){
        const { book } = this.state;
        return(
        <div className={styles.wrapper}>
            <div className={styles.mainInfoContainer}>

                <div className={styles.bookImage}>
                    <img src={book.bookImageUrl} alt={book._id}/>
                </div>

                <div className={styles.mainInfo}>
                    <div className={styles.bookName}>
                        <h2 className={styles.bookNameHeader}>{book.name}</h2>
                    </div>
                    <div className={styles.authorsWrapper}>
                        <h2>{this.state.bookInfoFetched && this.state.book.authors.length>1 ? 'Autorzy:' : 'Autor:'}</h2>
                        <ul>
                            {this.state.bookInfoFetched && this.state.book.authors.map((author) => 
                            <li>{<BookItemAuthor key={author.authorId} authorId={author.authorId} />}</li>)}
                        </ul>
                    </div>
                    <div className={styles.additionalInfo}>
                        <p>Średnia ocena: <strong>{book.averageGrade} / 5</strong></p>
                        <p>Ilość ocen: <strong>TO DO</strong></p>
                        <button className={styles.addGradeButton}>Dodaj ocenę</button>
                    </div>
                </div>

                <div className={styles.rentInfo}>
                    <button className={styles.addToShoppingCartButton}>
                        Dodaj do koszyka <FontAwesomeIcon icon="shopping-cart" size="1x" />
                    </button>
                    <button className={styles.rentNowButton}>Wypożycz teraz</button>
                    <div className={styles.additionalInfo}>
                        <p>Cena: <strong>{book.price} zł</strong></p>
                        <p>Ilość sztuk: <strong>TO DO</strong></p>
                    </div>
                </div>
            </div>
            <div className={styles.bookDescription}>
                <h2>Opis:</h2>
                <p>{book.description}</p>
            </div>
        </div> 
        )
    }
  
}

export default BookInfo;