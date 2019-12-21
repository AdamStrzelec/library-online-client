const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: String, required: true},
    bookId: {type: String, required: true},
    grade: {type: Number, required: true},
    review: {type: String, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Review', reviewSchema);



