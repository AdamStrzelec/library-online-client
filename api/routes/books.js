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

router.post('/addPhysicalBook', (req, res) => {
    DAO.addPhysicalBook(req, res);
})
router.put('/:bookId', (req, res)  => {
    DAO.editBookById(req, res)
})

module.exports = router;