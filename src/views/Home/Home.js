import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Home.css';




class Home extends React.Component{

    state = {
        books: []
    }

    componentDidMount = () => {
        
        
            fetch('http://localhost:4000/books')
            .then(response => response.json())
            .then(json => this.setState({books: json.books}))
    }
    render(){
        const { books } = this.state;
        console.log(this.props.match.params.id)

       

        return(
            <div className="homeWrapper">
            <div>searchbar</div>
            <div className="items">
                {/* <BookItem book={inMemoryBooks[0]}/>
                <BookItem book={inMemoryBooks[1]}/>
                <BookItem book={inMemoryBooks[2]}/> */}
                
                {books.map(book => <BookItem key={book.id} book={book} full={this.props.match.params.id=!undefined ? false:true}/>)}
            </div>
            </div>
        )
    }
};

export default Home;