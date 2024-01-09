const express = require('express');
const router = express.Router();
const {getBooks, setBooks} = require('../controllers/bookController');
router.get('/',getBooks)
router.post('/',setBooks)
module.exports = router