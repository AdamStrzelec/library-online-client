const mongoose = require('mongoose');
const Transaction = require('../models/transactions');
const PhysicalBook = require('../models/physicalBook');
const UserBook = require('../models/userBooks');
const User = require('../models/user');

exports.rentBook = function(req, res){
    User.findById(req.body.userId)
    .exec()
    .then(user => {
        if(user){
            // res.status(201).json({user: req.body.userId});
            UserBook.find({bookId: req.body.bookId})
            .exec()
            .then(book => {
                console.log(book.length)
                if(book.length===0){
                    PhysicalBook.findOneAndUpdate({bookId: req.body.bookId, loan: false}, {loan: true})
                    .then(physicalBook => {
                        // res.status(200).json(physicalBook);
                        const transaction = new Transaction({
                            _id: new mongoose.Types.ObjectId(),
                            userId: req.body.userId,
                            physicalBookId: physicalBook._id,
                            loaned: true,
                            rentDate: new Date(),
                            returnDate: null,
                        })
                        transaction.save()
                        .then(() => {
                            // res.status(200).json(transaction)
                            const userBook = new UserBook({
                                _id: new mongoose.Types.ObjectId(),
                                userId: req.body.userId,
                                bookId: req.body.bookId,
                                physicalBookId: physicalBook._id,
                                rentDate: new Date()
                            })
                            userBook.save()
                            .then(userBook => {
                                res.status(201).json(userBook);
                            })
                            .catch(err => err);
                            
                        })
                        .catch(err => err)
                    })
                    .catch(err => err)
                }else{
                    res.status(409).json({message: 'Możesz posiadać tylko jeden egzemplarz książki'})
                }
            })
        }else{
            res.status(404).json({message: 'Uzytkownik nie istnieje'});
        }
    })
    .catch(err => err)
}

exports.returnBook = function(req, res){
    User.findById(req.body.userId)
    .exec()
    .then(user => {
        if(user){
            Transaction.findOneAndUpdate({physicalBookId: req.body.physicalBookId}, {loaned: false, returnDate: new Date()})
            .then(() => {
                // res.status(200).json('lolo');
                PhysicalBook.findOneAndUpdate({_id: req.body.physicalBookId}, {loan: false})
                .then(() => {
                    UserBook.findOneAndDelete({userId: req.body.userId, physicalBookId: req.body.physicalBookId})
                    .then(()=>{
                        res.status(200).json({message: 'książka została zwrócona'});
                    })
                    .catch(err => err)
                })
                .catch(err => err)
            })
            .catch(err => err)
        }else{
            res.status(404).json({message: 'uzytkownik nie istnieje'});
        }
    })
    .catch(err => err)
}
