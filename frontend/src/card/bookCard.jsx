/* eslint-disable no-unused-vars */
import React from 'react'
import ViewButton from '../components/viewButton'
function BookCard(props) {
  const img = `https://covers.openlibrary.org/b/isbn/${props.isbn} -L.jpg`

  return (
    <div className='bookCard'>
        <img  src={img} alt='cover'></img>
        <h2>{props.bookname}</h2>
        <p>{props.author}</p> <br/>
        <span><ViewButton bookname = {props.bookname}/></span>
    </div>
  )
}

export default BookCard