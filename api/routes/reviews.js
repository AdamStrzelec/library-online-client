const express = require('express');
const router = express.Router();
const DAO = require('../DAO/reviewsDAO')

router.post('/', (req, res, next) => {
    DAO.addReview(req, res);
})
router.get('/:bookId', (req, res, next)  => {
    DAO.getReviewsByBookId(req,res)
})
router.get('/averageGrade/:bookId', (req, res,next) => {
    DAO.getAverageGrade(req, res)
})

module.exports = router;