const express = require('express');
const router = express.Router();
const DAO = require('../DAO/reviewsDAO');

router.get('/:bookId', (req, res, next)=>{
    res.status(200).json({wiadomosc: 'xD'})
})

router.post('/', (req, res, next) => {
    DAO.addReview(req.body)
    res.status(200).json({message: 'review added'})
})

module.exports = router;