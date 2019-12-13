const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    login: { type: String, required: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    userType: { type: String, required: true},
    place: { type: String, required: true},
    street: { type: String, required: true},
    homeNumber: { type: Number, required: true},
    phoneNumber: { type: Number, required: true},
})

module.exports = mongoose.model('User', userSchema);