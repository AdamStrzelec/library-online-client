import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Top.css'


class Top extends React.Component{

    state = {
        books: [],
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/books/top/10')
        .then(response => response.json())
        .then(json => this.setState({books: json.books}))
    }

    render(){
        let {books} = this.state;
        return(
            <div>
                {books.map((book, index) =>
                    <div className="itemWraper">
                        <p className="rankNumber">#{index+1}</p><BookItem key={book.id} book={book} />
                    </div>)}
            </div>
        )
    }
}

export default Top;