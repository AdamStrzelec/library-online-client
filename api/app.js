const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/books');
const physicalBooksRoutes = require('./routes/physicalBooks');
const authorRoutes = require('./routes/authors');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');

const uri = 'mongodb://Adam_96:Adam!2#4@node-rest-shop-shard-00-00-klt2b.mongodb.net:27017,node-rest-shop-shard-00-01-klt2b.mongodb.net:27017,node-rest-shop-shard-00-02-klt2b.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);
app.use('/physicalBooks', physicalBooksRoutes);
app.use('/transactions', transactionRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;