const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: String, required: true },
    physicalBookId: { type: String, reguired: true },
    loaned: { type: Boolean, required: true },
    rentDate: { type: Date, required: true },
    returnDate: {type: Date, required: false },
})

module.exports = mongoose.model('Transaction', TransactionSchema);