const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: String, required: true},
    bookId: {type: String, required: true},
    grade: {type: Number, required: false},
    review: {type: String, required: false}
})

module.exports = mongoose.model('Review', reviewSchema);