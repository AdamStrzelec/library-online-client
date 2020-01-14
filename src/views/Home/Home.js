import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Home.css';
import Searchbar from '../../components/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';
import * as bookItemsApi from '../../helpers/booksApi';




class Home extends React.Component{

    state = {
        books: [],
        booksQuantity: 0,
    }

    componentDidMount = async () => {
        // const booksQuantityJson = await fetch('http://localhost:4000/physicalBooks/quantity')
        //     .then(response => response.json())
        //     .then(json => this.setState({booksQuantity: json.quantity}))
        const booksJson = await fetch('http://localhost:4000/books/page/1')
            .then(response => response.json())
            .then(json => this.setState({books: json.books}))
        // this.setState ({books: booksJson.books})
    }
    render(){
        const { books } = this.state;
       
       

        return(
            <div className="homeWrapper">
            <Searchbar />
            <div className="items">                
                {books.map(book => <BookItem key={book.id} book={book} />)}
            </div>
                <Pagination pageNr={1} booksQuantity={this.state.booksQuantity}/>
            </div>
        )
    }
};

export default Home;