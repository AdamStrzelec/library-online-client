const Book = require('../models/book');
const Author = require('../models/author');
const mongoose = require('mongoose');

exports.addBook = function(bookBody, res){
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: bookBody.name,
        bookImageUrl: bookBody.bookImageUrl,
        description: bookBody.description,
        price: bookBody.price,
        authors: [...bookBody.authors]
     })
     book
     .save()
     .then(result =>{
         res.status(201).json({
             message: 'book created',
             book: bookBody
         })
     })
     .catch(err => {
         res.status(500).json({
             message: err
         })
     })
}

exports.getBooks = function(res){
    Book.find()
        .then(result => {
            res.status(200).json({books: result.map(book => {
                return {
                    id: book._id,
                    name: book.name,
                    bookImageUrl: book.bookImageUrl,
                    description: book.description,
                    price: book.price,
                    authors: book.authors.map(author => {
                        return {author: author.authorId}
                    })
                }
            })})
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
}
