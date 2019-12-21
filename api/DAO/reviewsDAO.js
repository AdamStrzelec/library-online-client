const mongoose = require('mongoose');
const Review = require('../models/review');
const Book = require('../models/book');
const User = require('../models/user');


exports.addReview = function(req, res){
    User
    .find({_id: req.body.userId})
    .then(user => {
        if(user.length>0){

            Review
            .find({bookId: req.body.bookId, userId: req.body.userId})
            .then(review => {
                if(review.length>0){
                    res.status(409).json({message: 'juz dodawales opinie'});
                }else{

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
                                date: new Date()
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
                // res.status(201).json({review});
            })
            .catch(err => err)
        }else{
            res.status(404).json({message: 'user not exist'});
        }
    })
    .catch(err => err)
}
exports.getReviewsByBookId = function(req,res){
    
    Review.find({})
    .sort({date: -1})
    .where('bookId').equals(req.params.bookId)
    .then(result => {
       res.status(200).json({reviews: result.map(review => {
        
           return {
            id: review._id,
            userId: review.userId,
            bookId: review.bookId,
            grade: review.grade,
            review: review.review,
            
           }
       })})
     })
   .catch(err => {
       res.status(500).json({message: err})
   })
 
}

exports.getAverageGrade = function(req, res){
    Review.find({bookId: req.params.bookId})
    .then(result => {
        let sum = 0;
        let avg = 0;
        if(result.length>0){
            result.map(review => {sum += review.grade})
            avg = sum/result.length;
        }
        if(avg===null){avg = 0};
        res.status(200).json({
            averageGrade: avg,
            reviewsCount: result.length
        })
    })
    .catch(err => {
        res.status(500).json({error: err})
    })

}
