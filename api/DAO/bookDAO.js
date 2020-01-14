const Book = require('../models/book');
const PhysicalBook = require('../models/physicalBook');
const Author = require('../models/author');
const mongoose = require('mongoose');
const PhysicalBookDAO = require('./physicalBooksDAO');

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
        if(bookBody.addBooksQuatity>0){
            PhysicalBookDAO.addPhysicalBooks(result._id, bookBody.addBooksQuatity)
        }
        if(bookBody.deleteBooksQuantity>0){
            PhysicalBookDAO.removePhysicalBooks(result._id, bookBody.deleteBooksQuantity)
        }
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

exports.getBooks = function(req, res){
    const perPage = 10;
    const page = parseInt(req.params.pageNr)-1;
    Book.find()
        .limit(perPage)
        .skip(perPage * page)
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

exports.getTopBooks = function(req, res){
    Book.find()
    .limit(parseInt(req.params.quantity))
    .sort({averageGrade: -1})
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

exports.getBookByName = function(req, res){
    // res.status(200).json({books: req.params.name})
    Book.find({'name': { "$regex": req.params.name, "$options": "i" }})
    .exec()
    .then(result => {
        // res.status(200).json(result)
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
        res.status(500).json({error: err})
    })
}

// exports.getQuantity = function(req, res){
//     res.status(200).json({quantity: 8});
// }

exports.editBookById = function(req, res){
    const id ={_id:req.params.bookId}
    idBook = req.params.bookId;
    // let bookIdis = '';
    Book.find({ _id: req.params.bookId })
        .exec()
        .then(book => {
            if (book.length >= 1) {
           console.log(book)
            const bookEdited={
                name: req.body.name,
                bookImageUrl: req.body.bookImageUrl,
                description: req.body.description,
                price: req.body.price,
                // averageGrade: book.averageGrade,
                authors: [...req.body.authors],
                // date: new Date(),
                

            }
            console.log(id)
            console.log(bookEdited)
            

            Book.updateOne(id, bookEdited)
             .then(() => {
                //  PhysicalBookDAO.addPhysicalBooks()
                 if(req.body.addBooksQuatity>0){
                     console.log('trza ddać: '+req.body.addBooksQuatity + ' id: '+idBook);
                     PhysicalBookDAO.addPhysicalBooks(idBook, req.body.addBooksQuatity)
                 }
                 if(req.body.deleteBooksQuantity>0){
                     console.log('trza odjac '+req.body.deleteBooksQuantity);
                     PhysicalBookDAO.removePhysicalBooks(idBook, req.body.deleteBooksQuantity)
                 }
                 res.status(201).json({ book: bookEdited });

                })
             .catch(err => res.status(500).json({ err }))
               
        }
    }
    )
    
    .catch(err => err)
}
    

