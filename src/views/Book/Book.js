import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Book.css';
import * as api from '../../helpers/booksApi';
import BookInfo from '../../components/BookInfo/BookInfo';

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
        // const authors = [];
        this.setState({book: bookJson.book})
        // await bookJson.book.authors.map(async author=>{  
        //     const authorJson = await api.getAuthorById(author.authorId);
        //     authors.push(authorJson);
        // })
        // await this.setState({authors: authors});
        
    }
    render() {

        // const { book } = this.state;
        // console.log(book);
        return (
            <div className="bookWrapper">
                <BookInfo bookId={this.props.match.params.id}/>
            </div>
        )
    }
};

export default Book;