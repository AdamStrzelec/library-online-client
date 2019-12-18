import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Book.css';
import * as api from '../../helpers/booksApi';
import BookInfo from '../../components/BookInfo/BookInfo';
import Reviews from '../../components/Reviews/Reviews'


class Book extends React.Component {

    state = {
        book: {},
        // authors: [],
        reviews: [],
        // books: {
        //     description: '',
        //     authors: [''],
        //     id: '/'
        // },
        // filter: this.props.match.params.id

    }
    componentDidMount = async () => {
        const bookJson = await api.getBookById(this.props.match.params.id);
        const reviewsJson = await api.getReviewsByBookId(this.props.match.params.id);
        
        // const authors = [];
        this.setState({book: bookJson.book})
        this.setState({reviews: reviewsJson.reviews})
        // await bookJson.book.authors.map(async author=>{  
        //     const authorJson = await api.getAuthorById(author.authorId);
        //     authors.push(authorJson);
        // })
        // await this.setState({authors: authors});
        
    }
    render() {
        const  reviews  = this.state.reviews;
        // const { book } = this.state;
        // console.log(book);
        //console.log(reviews)
        return (
            <>
            <div className="bookWrapper">
                <BookInfo bookId={this.props.match.params.id}/>
            </div>
            <div>
            {reviews.map(review => <Reviews key={review.id} review={review} />)}
            </div>
             </>
        )
    }
};

export default Book;