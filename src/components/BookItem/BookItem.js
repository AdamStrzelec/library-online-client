import React from 'react';
import styles from './BookItem.module.scss';
import BookItemAuthor from './BookItemAuthor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';




let bookDescriptionLimit = (description, full) => {
    if (full === true) {
        return description
    }
    if (description.length > 250) {
        return description.substring(0, 250) + '...'
    }
    return description
}

let getAuthorNameById = (authorId) => {
    fetch('http://localhost:4000/authors/' + authorId)
        .then(response => response.json())
        .then(json => console.log(json.authorName))
}

class BookItem extends React.Component {
    state = {
        authors: []
    }

    componentDidMount = () => {
        //     let authorsArray = []
        //    for(let i=0; i<this.props.book.authors.length; i++){
        //     authorsArray.push(getAuthorNameById(this.props.book.authors[i]))
        //    } 
        //    console.log(authorsArray + " arr")
        // console.log(this.props.book.authors.length)

    }

    render() {
        const { book } = this.props;
        console.log(book)

        return (
            <div className={styles.wrapper}>
                <div className={styles.bookItemImage}>
                    <img src={book.bookImageUrl} alt={`book item ${book.id}`} />
                </div>

                <div className={styles.bookInfo}>


                    <NavLink className={styles.bookName} to={'book/'+book.id}>{book.name}</NavLink>

                    <div className={styles.descriptionWrapper}>
                        <p className={styles.description}>{bookDescriptionLimit(book.description, this.props.full)}</p>
                    </div>

                    <div className={styles.authorWrapper}>
                        {book.authors.map(author => <div className={styles.author} 
                         key={author.author}><BookItemAuthor authorId={this.props.full === false ? author.author:author.authorId} /></div>)}
                    </div>
                    {/* <h3 className={styles.author}>{book.author}</h3> */}

                    <p className={styles.rating}>Ocena: {book.rating}</p>
                </div>

                <div>
                    <button className={styles.addBook}>
                        Dodaj do koszyka <FontAwesomeIcon icon="shopping-cart" size="1x" />
                    </button>
                    <p>Ilość:</p>
                    <p>cena:</p>
                </div>
            </div>

        )

    }

}

export default BookItem;