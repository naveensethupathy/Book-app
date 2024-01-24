/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import BookCard from '../card/bookCard'
// import { response } from 'express'
import AddBook from './AddBook'
function Bookslist() {
  document.body.style.margin='20px'
 const [books,setbooks] = useState([])
 
    useEffect(()=>{
       
    axios
    .get("http://localhost:2000/api/books/")
    .then((res)=>{
        setbooks(res.data)
        
  
     })
   
 },[])
 function card(books){
  return <BookCard 
  bookname = {books.bookname}
  isbn = {books.isbn}
  author = {books.author}

  />
 }

  return (
    
    <div>
    <h1>Books</h1>
    <AddBook/>
    <div className='booklist'>

    {books.map(card)}
  
    
    </div>
    </div>
  )
}

export default Bookslist