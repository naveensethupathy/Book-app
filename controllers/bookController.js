const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Book = require("../model/booksModel");
const axios = require("axios");

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
});
// @desc set books
//@route SET/api/books
//@access Private
const setBooks = asyncHandler(async (req, res) => {
  if (!req.body.bookname) {
    res.status(400);
    throw new Error("Please add a Book Name");
  }
  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${req.body.bookname}&fields=author_name,title,isbn&limit=1&sort=rating desc&lang=en`
  );
  const resp = await axios.get(
    `https://covers.openlibrary.org/b/isbn/${response.data.docs[0].isbn[0]} -S.jpg`
  );
  console.log(resp);
  bn = req.body.bookname;
  img = resp.path;
  const books = await Book.create({
    bookname: req.body.bookname,
    author: response.data.docs[0].author_name[0],
    isbn: response.data.docs[0].isbn[0],
  });

  res.status(200).json(books);
});
module.exports = {
  getBooks,
  setBooks,
};
