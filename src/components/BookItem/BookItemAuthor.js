import React from 'react';

class BookAuthorItem extends React.Component {
    state = {
        author: '',
    }
    componentDidMount = () => {
        fetch('http://localhost:4000/authors/'+this.props.authorId)
        .then(response => response.json())
        .then(json => this.setState({author: json.authorName}))
    }

    render(){

        return(
            <div>
                {this.state.author}
            </div>
        )
    }
}
export default BookAuthorItem;