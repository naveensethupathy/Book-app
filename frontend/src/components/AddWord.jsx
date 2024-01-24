/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
function AddWord(props) {
    const [word,setWord] = useState("")
    const [wname,setWname] = useState("")
    function handleChange(event){
       
        setWord(event.target.value);
        
    }
    

    function handleClick(){
        setWname(word)
        console.log(wname);
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/words/add',
            data: {
              bookname:props.bookname,
              word:word
            }
          })
          .then((res)=>{
             console.log(res.data);
             window.setTimeout( function() {
                window.location.reload();
              }, 30000);
              window.location.reload()
        
           })
           
    }
    
  return (
    <div className='addbar'>
        <input onChange={handleChange}  type='text' placeholder='  Enter a Word' value={word}></input> 
        <button onClick={handleClick} className='addButton'>Add Word</button>
    </div>
  )
}

export default AddWord