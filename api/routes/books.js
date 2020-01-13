const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const mongoose = require('mongoose');
const DAO = require('../DAO/bookDAO');

const inMemoryBooks = [
    {
        bookId: '213213',
        bookName: 'slepnac od swatel',
        author: 'zulczyk',
        notes: '8.5'
    },
    {
        bookId: '2124323243',
        bookName: 'w głebi lasu',
        author: 'coben',
        notes: '8.5'
    },
]

router.get('/', (req, res, next) => {
    DAO.getBooks(res)
})

router.post('/', (req, res, next) => {
    DAO.addBook(req.body, res)
})

router.get('/:bookId', (req, res)  => {
    DAO.getBookById(req, res)
})

router.get('/book/:name', (req, res, next)=>{
    DAO.getBookByName(req, res);
})


// router.get('/getTotalCount/:bookId', (req, res, next) => {
//     // DAO.getPhysicalBooks(req, res);
//     // console.log(req.params.bookId)
//     res.status(200).json({ksiazka: req.params.bookId})
// })
router.put('/:bookId', (req, res)  => {
    DAO.editBookById(req, res)
})

module.exports = router;