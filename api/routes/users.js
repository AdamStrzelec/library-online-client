const express = require('express');
const router = express.Router();
const DAO = require('../DAO/userDAO');

router.post('/signup', (req, res, next) => {
    DAO.addUser(req, res);
})
router.post('/login', (req, res, next) => {
    DAO.loginUser(req, res);
})

module.exports = router;