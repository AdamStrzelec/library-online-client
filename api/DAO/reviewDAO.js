const Review = require('../models/review');
const mongoose = require('mongoose');

exports.addRewiev = function(req, res){
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.userId,
        bookId: req.body.bookId,
        grade: req.body.grade,
        review: req.body.review
    })
    review
     .save()
     .then(()=> res.status(201).json({review: review}))
     .catch(err => {
         res.status(500).json({error: err})    
     })
}

exports.getAverageReview = function(req, res){
    Review.find({})
    .where('bookId').equals(req.params.reviewId)
    // .exec()
    .then(result => {
        
        let sum = 0;
        let avg = 0;
        if(result.length>0){
            for(let i=0; i<result.length; i++){
                sum += result[i].grade
            }
            avg = sum/result.length
        }

        console.log('sum '+sum);
        res.status(200).json({gradesLength: result.length,
                                avgGrade: avg});
        // console.log(req.params.reviewId)
    })
    .catch(err => {res.status(500).json({error: err})})
}
