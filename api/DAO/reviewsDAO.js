const mongoose = require('mongoose');
const Review = require('../models/review');
const Book = require('../models/book');

exports.addReview = function(reviewBody){
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        userId: reviewBody.userId,
        bookId: reviewBody.bookId,
        grade: reviewBody.grade,
        review: reviewBody.review,
    })
    review
    .save()
    .then(() => {
        Book
        .findById(reviewBody.bookId)
        .then(result => {
            // if(result.length>0){
            // let sum = 0;
            // result.map(res => sum+=res.grade);
            // console.log(sum)
            // return result
            // }
            // else{
            //     console.log('book not found')
            //     return 'book not found'
            // }
            if(result){
                console.log('book not exist')
            }else{console.log('book founded')}      
        })
        .catch((err) => err)
    })
    .catch((err) => err)
}