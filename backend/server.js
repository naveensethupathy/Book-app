const { log } = require('console');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const axios = require('axios');

const connectDB = require('./config/db')
const port = process.env.PORT || 4000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/books',require('./routes/bookroutes'))
app.use('/api/words',require('./routes/wordroutes'))


app.listen(port, ()=> console.log(`Server running on port ${port}`));