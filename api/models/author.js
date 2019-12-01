const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    authorName: {type: String, required: true},
})

module.exports = mongoose.model('Author', authorSchema);