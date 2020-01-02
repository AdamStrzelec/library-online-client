const mongoose = require('mongoose');
const User = require('../models/user');
exports.addUser = function (req, res) {
    User.find({ login: req.body.login })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                res.status(409).json({ message: 'User login already exists' })
            } else {
                User.find({ email: req.body.email })
                    .exec()
                    .then(userEmail => {
                        if (userEmail.length >= 1) {
                            res.status(409).json({ message: 'User email already exists' })
                        }
                        else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                login: req.body.login,
                                password: req.body.password,
                                name: req.body.name,
                                lastName: req.body.lastName,
                                email: req.body.email,
                                userType: 'user',
                                place: req.body.place,
                                street: req.body.street,
                                homeNumber: req.body.homeNumber,
                                phoneNumber: req.body.phoneNumber
                            })
                            user.save()
                                .then(() => res.status(201).json({ user: user }))
                                .catch(err => res.status(500).json({ err }))
                        }
                    })
            }
        })
        .catch(err => err)
}

exports.loginUser = function (req, res) {
    User.find({
        login: req.body.login,
        password: req.body.password
    })
        .exec()
        .then(user => {
            if (user.length < 1) {
                res.status(404).json({ message: 'User name not found. User doesn\'t exist' })
            } else {
                console.log(user[0])
                res.status(200).json({ user: user[0] })
            }
        })
        .catch(err => res.status(500).json({ error: err }))
}

exports.getUserName = function(req, res){
    User.findById(req.params.userId)
    .exec()
    .then(result => {
        if(result){
            res.status(200).json({userName: result.login})
        }else{
            res.status(404).json({userName: 'No name'})
        }
        
    })
    .catch(err => {res.status(500).json({error: err})})
}
exports.editUser = function (req, res) {
    const id={login:req.body.login}
    User.find({ login: req.body.login })
        .exec()
        .then(user => {
            if (user.length >= 1) {
               
                const userEdited = {
                    
                    login: req.body.login ,
                    password: req.body.password ,
                    name: req.body.name ,
                    lastName: req.body.lastName ,
                    email: req.body.email ,
                    userType: 'user' ,
                    place: req.body.place ,
                    street: req.body.street ,
                    homeNumber: req.body.homeNumber ,
                    phoneNumber: req.body.phoneNumber
                 }
                 
                
                User.updateOne(id, userEdited)
                    .then(() => res.status(201).json({ user: userEdited }))
                    .catch(err => res.status(500).json({ err }))
                }
            }
    
        )
    .catch(err => err)
    }
