import React from 'react';
import AppContext from '../../context';
import ModalInput from '../../components/Modal/ModalInput';
import styles from './AddBookView.module.scss';
import * as api from '../../helpers/booksApi';

class AddBookView extends React.Component {
    
    state = {
        bookNameDraft: '',
        imgUrlDraft: '',
        descriptionDraft: '',
        priceDraft: '',
        authorNameDraft: '',
        addedAuhors: [],
        foundedAuthors: [],
        authorFocused: false,
        
      
    }

    componentDidMount = async () => {
        const bookJson = await api.getBookById(this.props.match.params.id);
        
        
    }
    changeBookDraftProperty = (e, name) => {
        this.setState({[name]: e.target.value})
    }

    findAuthors = (e) => {
        fetch('http://localhost:4000/authors/author/'+e.target.value)
        .then(response => response.json())
        .then(json => {
            this.setState({foundedAuthors: json})
        })
        .catch(err => console.log(err))
    }

    addAuthor = (author) => {
        let authors = this.state.addedAuhors;
        authors.push(author);
        authors = authors.filter((thing, index, self) =>
            index === self.findIndex((t) => (
            t._id === thing._id
        ))
        )
        this.setState({addedAuhors: authors});
    }
    removeAuthor = (author) => {
        let authors = this.state.addedAuhors;
        let index = authors.findIndex(a => a._id === author._id)
        authors.splice(index, 1);
        this.setState({addedAuhors: authors});
    }

    addBook = async (context) => {
        let id=this.props.match.params.id;
        let fetchLink='';
        let postOrPut='';
     
        if(id==="undefined"){
             fetchLink='http://localhost:4000/books';
             postOrPut='POST'
        }
        else{
            fetchLink='http://localhost:4000/books/'+id
            postOrPut='PUT'
        }
        
        const authorsId = [];
        for(let i=0; i<this.state.addedAuhors.length; i++){
            authorsId.push({authorId: this.state.addedAuhors[i]._id});
        }

        const book = {
            name: this.state.bookNameDraft,
            bookImageUrl: this.state.imgUrlDraft,
            description: this.state.descriptionDraft,
            price: this.state.priceDraft,
            authors: authorsId
        }

        if(this.addBookIsFilled()){
            const response = await fetch(fetchLink,{
                method: postOrPut,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)})
                .then(result => {
                    if(result.status===201){
                        // this.setState({userDataFetched: true});
                        // return result.json();
                        console.log('dodano książkę');
                        // return 'dodano ksiazke';
                    }                    
                })
        }else{
            context.openInfoModal('Musisz wypełnić wszystkie pola aby dodać książkę');
        }
    }

    addBookIsFilled = () => {
        const { bookNameDraft, imgUrlDraft, descriptionDraft, priceDraft, addedAuhors } = this.state;
        return bookNameDraft.length > 0 && imgUrlDraft.length > 0 && descriptionDraft.length > 0 && priceDraft.length > 0 && addedAuhors.length > 0;
    }

    render(){
        return(
            <AppContext.Consumer>
                {context => (
                    <div className={styles.wrapper}>
                    <h2 className={styles.header}>Dodaj książkę</h2>
                    <ModalInput type='text' name='book name' label='Nazwa książki'  setValue={(e) => this.changeBookDraftProperty(e, 'bookNameDraft')} />
                    <ModalInput type='text' name='img url' label='Adres obrazka' setValue={(e) => this.changeBookDraftProperty(e, 'imgUrlDraft')} />
                    <ModalInput tag='textarea' type='text' name='description' label='Opis' maxLength={500} setValue={(e) => this.changeBookDraftProperty(e, 'descriptionDraft')} />
                    <ModalInput type='number' name='price' label='Cena' setValue={(e) => this.changeBookDraftProperty(e, 'priceDraft')} />
                    <div className={styles.author} >
                        <div className={styles.searchAuthor} id='searchAuthor'>
                            <ModalInput type='text' name='author name' label='Nazwa autora' id='authorInput' setValue={(e) => this.findAuthors(e)}  />
                            {this.state.foundedAuthors.length>0 && Array.isArray(this.state.foundedAuthors) && 
                                <div className={styles.foundedAuthorsActive}>
                                    <ul className={styles.authors}>
                                        {this.state.foundedAuthors.map(author => 
                                            <li key={author._id} onClick={()=>this.addAuthor(author)}>{author.authorName}</li>
                                        )}
                                    </ul>
                                </div>}
                        </div>
                        <div className={styles.addedAuthors} >
                            <ul>
                                {this.state.addedAuhors.map(author => <li key={author._id}>{author.authorName} <span onClick={()=>this.removeAuthor(author)}>X</span></li>)}
                            </ul>
                        </div>
                        <button className={styles.addBookButton} onClick={()=>this.addBook(context)}>Dodaj książkę</button>
                    </div>
                    
                </div>
                )}
            </AppContext.Consumer>

        )
    }
}

export default AddBookView;