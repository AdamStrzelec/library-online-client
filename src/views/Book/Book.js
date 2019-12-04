import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Book.css';




class Book extends React.Component {

    state = {
        books: {
            description: '',
            authors: [''],
            id: '/'
        },
        filter: this.props.match.params.id

    }
    componentDidMount = () => {

        fetch('http://localhost:4000/books/' + this.state.filter)
            .then(response => response.json())
            .then(json => this.setState({ books: json.book }))
    }
    render() {
        const { books } = this.state;
        return (
            <div className="homeWrapper">
                <div>searchbar</div>
                <div className="items">
                    <BookItem book={books} key={books.id}  full={this.props.match.params.id = !undefined ? true : false} />)}      
                </div>
            </div>
        )
    }
};

export default Book;