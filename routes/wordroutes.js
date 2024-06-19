const express = require('express');
const router = express.Router();
const {getWords, setWords, getWordCount} = require('../controllers/wordController');
router.post('/',getWords)
router.post('/add',setWords)
router.post('/count',getWordCount)
module.exports = router