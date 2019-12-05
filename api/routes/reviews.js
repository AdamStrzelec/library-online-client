const express = require('express');
const router = express.Router();
const DAO = require('../DAO/reviewsDAO')

router.post('/', (req, res, next) => {
    DAO.addReview(req, res);
})

module.exports = router;