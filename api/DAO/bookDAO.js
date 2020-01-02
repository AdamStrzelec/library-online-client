const Book = require('../models/book');
const PhysicalBook = require('../models/physicalBook');
const Author = require('../models/author');
const mongoose = require('mongoose');

exports.addBook = function(bookBody, res){
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: bookBody.name,
        bookImageUrl: bookBody.bookImageUrl,
        description: bookBody.description,
        price: bookBody.price,
        averageGrade: 0,
        authors: [...bookBody.authors],
        date: new Date(),
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
        .sort({date: -1})
        .then(result => {
            res.status(200).json({books: result.map(book => {
                return {
                    id: book._id,
                    name: book.name,
                    bookImageUrl: book.bookImageUrl,
                    description: book.description,
                    price: book.price,
                    averageGrade: book.averageGrade,
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

exports.getBookById = function(req, res){
    Book
        .findById(req.params.bookId)
        .exec()
        .then(result => {
            res.status(200).json({
                book: result
            })
        })
        .catch(err => {res.status(500).json({errorek: err})})
}

exports.addPhysicalBook = function(req, res){
    Book.findById(req.body.bookId)
    .then(book =>{
        if(book){
            for(let i=0; i<req.body.booksCount; i++){
                const physicalBook = new PhysicalBook({
                    _id: new mongoose.Types.ObjectId(),
                    bookId: req.body.bookId,
                    loan: false
                })
                physicalBook.save()
            }
            res.status(201).json({message: 'books added'})
        }else{
            res.status(404).json({message: 'book not exist'})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
}
