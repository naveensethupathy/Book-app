const express = require('express');
const router = express.Router();
const {getWords, setWords} = require('../controllers/wordController');
router.post('/',getWords)
router.post('/add',setWords)
module.exports = router