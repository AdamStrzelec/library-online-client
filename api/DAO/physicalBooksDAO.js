const mongoose = require('mongoose');
const PhysicalBook = require('../models/physicalBook');
const Book = require('../models/book');

exports.getPhysicalBooksTotal = function(req, res){
    PhysicalBook.find({bookId: req.params.bookId})
    .exec()
    .then(result => {
        res.status(200).json({physicalBooksCount: result.length})
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
}

exports.getPhysicalBooksAvailable = function(req, res){
    PhysicalBook.find({bookId: req.params.bookId, loan: false})
    .exec()
    .then(result => {
        res.status(200).json({physicalBooksCount: result.length})
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
}


exports.addPhysicalBooks = function(bookId, quantity){
    Book.findById(bookId)
    .then(book =>{
        if(book){
            for(let i=0; i<quantity; i++){
                const physicalBook = new PhysicalBook({
                    _id: new mongoose.Types.ObjectId(),
                    bookId: bookId,
                    loan: false
                })
                physicalBook.save()
            }
            // res.status(201).json({message: 'books added'})
        }else{
            // res.status(404).json({message: 'book not exist'})
        }
    })
    .catch(err => err)
}

exports.removePhysicalBooks = function(bookId, quantity){
    Book.findById(bookId)
    .then(book => {
        if(book){
            const books = [];
            PhysicalBook.find({bookId: bookId, loan: false}).limit(parseInt(quantity))
            .exec()
            .then(result => {
                for(let i=0; i<result.length; i++){
                    PhysicalBook.find({_id: result[i]._id}).remove().exec()
                    // console.log(result[i]._id)
                }

                // res.status(200).json(result)
            })
            .catch(error => error)
        }
    })
    .catch(err => err)
}