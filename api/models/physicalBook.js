const mongoose = require('mongoose');

const physicalBookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bookId: { type: String, required: true},
    loan: { type: Boolean, reguired: true }
})

module.exports = mongoose.model('PhysicalBook', physicalBookSchema);