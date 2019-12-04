const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const mongoose = require('mongoose');
const DAO = require('../DAO/reviewDAO');
const Review = require('../models/review');

router.get('/averageGrade/:reviewId', (req, res, next)=>{
    
    DAO.getAverageReview(req, res);
    // res.status(200).json({book: req.params})
})

router.post('/', (req, res, next)=>{
    DAO.addRewiev(req, res)    
})

module.exports = router;