const mongoose = require('mongoose');
const Review = require('../models/review');
const Book = require('../models/book');

exports.addReview = function(req, res){
    Book
    .findById(req.body.bookId)
    .then(result => {
        if(result){
            const review = new Review({
                _id: new mongoose.Types.ObjectId(),
                userId: req.body.userId,
                bookId: req.body.bookId,
                grade: req.body.grade,
                review: req.body.review,
            })
            review
            .save()
            .then(() => {   
                Review
                .find()
                .where('bookId').equals(req.body.bookId)
                .then(result => {
                    let sum = 0;
                    result.map(res => sum+=res.grade);
                    let avg = sum/result.length;
                    Book
                    .findByIdAndUpdate({ _id: req.body.bookId }, {averageGrade: avg})
                    .then(() => {
                        res.status(201).json({message: 'review added'})
                    })
                    .catch(err => err)
                })
                .catch(err => err)
            })
            .catch(err => err)
        }else{
            res.status(404).json({message: 'book not exist'})
        }
    })
    .catch(() => {
        res.status(404).json({message: 'invalid book id'})
    })
}