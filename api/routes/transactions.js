const express = require('express');
const router = express.Router();
const DAO = require('../DAO/transactionsDAO');

router.post('/rentBook', (req, res, next)=>{
    DAO.rentBook(req, res);
})
router.delete('/returnBook', (req, res, next)=>{
    DAO.returnBook(req, res);
})

module.exports = router;