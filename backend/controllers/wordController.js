const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Word = require('../model/wordsModel')
const axios = require('axios');
// @desc get words
//@route GET/api/worda
//@access Private 
const getWords = asyncHandler(async(req,res) =>{
    const words = await Word.find({})
    res.status(200).json(words)

})
// @desc Set words
//@route SET/api/worda
//@access Private  
const setWords = asyncHandler( async(req,res) =>{
    if(!req.body.word){
        res.status(400)
        throw new Error("Please add a Word")
    }
    const word = req.body.word
    const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
    const words = await Word.create({
        bookname: req.body.bookname,
        word: req.body.word,
        meaning:response.data[0].meanings[0].definitions[0].definition
        
    })
    res.status(200).json(words)
    
})
module.exports = {
    getWords,
    setWords
   
}