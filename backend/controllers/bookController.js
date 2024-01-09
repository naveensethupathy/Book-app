const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Book = require('../model/booksModel')
const getBooks = asyncHandler(async(req,res) =>{
    const books = await Book.find({})
    res.status(200).json(books)

})
// @desc set books
//@route SET/api/books
//@access Private  
const setBooks = asyncHandler( async(req,res) =>{
    if(!req.body.bookname){
        res.status(400)
        throw new Error("Please add a Book Name")
    }
    const books = await Book.create({
        bookname: req.body.bookname,
        
    })
    res.status(200).json(books)
    
})
module.exports = {
    getBooks,
    setBooks
   
}