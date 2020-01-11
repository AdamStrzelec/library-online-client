const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const DAO = require('../DAO/physicalBooksDAO');

router.get('/totalCount/:bookId', (req, res, next) => {
    DAO.getPhysicalBooksTotal(req, res);
})

router.get('/availableCount/:bookId', (req, res, next) => {
    DAO.getPhysicalBooksAvailable(req, res);
})

router.post('/addPhysicalBooks', (req, res, next) => {
    DAO.addPhysicalBooks(req, res);
})

router.delete('/removePhysicalBooks', (req, res, next) => {
    DAO.removePhysicalBooks(req,res);
})

router.get('/userBooks/:userId', (req, res, next) => {
    DAO.getUserBooks(req, res);
})


module.exports = router;