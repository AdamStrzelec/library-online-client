const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true},
    bookImageUrl: { type: String, required: true},
    description: { type: String, required: false},
    price: { type: Number, required: true},
    averageGrade: {type: Number, required: false}, 
    authors: [{authorId: {type: String, required: true}}],
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Book', bookSchema);