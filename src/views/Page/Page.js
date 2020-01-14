import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import BookItem from '../../components/BookItem/BookItem';
import Pagination from '../../components/Pagination/Pagination';
// import styles from 'Page.module.scss';

class Page extends React.Component{

    state = {
        books: [],
    }

    componentDidMount = async () => {
        this.fetchBooks();
        // await fetch('http://localhost:4000/books/page/'+this.props.match.params.pageNr)
        // .then(response => response.json())
        // .then(json => this.setState({books: json.books}))
    }

    componentDidUpdate = (prevProps) => {
        // console.log('page changed');
        // this.fetchBooks();
        if(this.props.match.params.pageNr !== prevProps.match.params.pageNr) {
            this.fetchBooks();
          }

        // fetch('http://localhost:4000/books/page/'+this.props.match.params.pageNr)
        // .then(response => response.json())
        // .then(json => this.setState({books: json.books}))
        // console.log('component updated')
    }

    fetchBooks = async () => {
        await fetch('http://localhost:4000/books/page/'+this.props.match.params.pageNr)
        .then(response => response.json())
        .then(json => this.setState({books: json.books}))
    }
    render(){
        let {books} = this.state;
        return(
            <div>
                <Searchbar />
                <div className="items">                
                    {books.map(book => <BookItem key={book.id} book={book} />)}
                </div>
                <Pagination pageNr={this.props.match.params.pageNr}/>
            </div>
        )
    }
}

export default Page;