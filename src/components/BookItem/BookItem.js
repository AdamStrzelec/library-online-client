import React from 'react';
import styles from './BookItem.module.scss';
import BookItemAuthor from './BookItemAuthor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let bookDescriptionLimit = (description) => {
    if(description.length > 250){
        return description.substring(0, 250) + '...'
    }
    return description
}

let getAuthorNameById = (authorId) => {
    fetch('http://localhost:4000/authors/'+authorId)
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

    render(){
        const {book} = this.props;
        return(
            <div className={styles.wrapper}>
            <div className={styles.bookItemImage}>
                <img src={book.bookImageUrl} alt={`book item ${book.id}`} />
            </div>
    
            <div className={styles.bookInfo}>
                <h2 className={styles.bookName}>{book.name}</h2>
                <div className={styles.authorWrapper}>
                {book.authors.map(author => <div className={styles.author} key={author.author}><BookItemAuthor authorId={author.author}/></div>)}
                </div>
                {/* <h3 className={styles.author}>{book.author}</h3> */}
                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>{bookDescriptionLimit(book.description)}</p>
                </div>
                {/* <p className={styles.rating}>Ocena: {book.rating}</p> */}
            </div>
            
            <div>
                <button className={styles.addBook}>
                    Dodaj do koszyka <FontAwesomeIcon icon="shopping-cart" size="1x" />
                </button>
            </div>
        </div>
        )

    }

}

export default BookItem;