const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const mongoose = require('mongoose');
const DAO = require('../DAO/bookDAO');

router.get('/:authorId', (req, res, next) => {
    Author.findById(req.params.authorId)
        .select('authorName')
        .exec()
        .then(result => {
            res.status(200).json({authorName: result.authorName})
        })
        .catch(err => {
            res.status(404).json({message: 'author not exist'})
        })
})

router.post('/', (req, res, next) => {
    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        authorName: req.body.authorName
    })
    author
        .save()
        .then(result => {
            res.status(201).json({message: 'author created',
                                  author: req.body.authorName})
        })
        .catch(err => res.status(500).json({message: err}))
})

module.exports = router;