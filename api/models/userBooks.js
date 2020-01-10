const mongoose = require('mongoose');

const UserBook = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    physicalBookId: { type: String, required: true },
    rentDate: { type: Date, required: true },
})

module.exports = mongoose.model('UserBook', UserBook);