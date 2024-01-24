/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
function AddBook() {
    const [name,setName] = useState("")
    const [bname,setBname] = useState("")
    function handleChange(event){
       
        setName(event.target.value);
        
    }
    

    function handleClick(){
        setBname(name)
        console.log(bname);
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/books/',
            data: {
              bookname:name
            }
          })
          .then((res)=>{
             console.log(res.data);
            
              
        
           })
           
    }
    
  return (
    <div className='addbar'>
        <input onChange={handleChange}  type='text' placeholder='  Enter a book name' value={name}></input> 
        <button onClick={handleClick} className='addButton'>Add book</button>
    </div>
  )
}

export default AddBook