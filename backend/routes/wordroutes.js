const express = require('express');
const router = express.Router();
const {getWords, setWords} = require('../controllers/wordController');
router.get('/',getWords)
router.post('/',setWords)
module.exports = router