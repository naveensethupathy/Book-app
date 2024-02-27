/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { response } from 'express'
import WordCard from '../card/WordCard'
import AddWord from './AddWord'
function Wordlist() {
 const [words,setWords] = useState([])
 const [count,setCount] = useState(0)
 const location = useLocation();
 const data = location.state;
 console.log(data);
    useEffect(()=>{
       
   
    axios({
      method: 'post',
      url: 'http://localhost:2000/api/words/',
      data: {
        bookname:data
      }
    })
    .then((res)=>{
       console.log(res.data);
        setWords(res.data)
        
  
     })
     axios({
      method: 'post',
      url: 'http://localhost:2000/api/words/count',
      data: {
        bookname:data
      }
    })
    .then((res)=>{
       console.log(res.data);
        setCount(res.data)
        
  
     })
   
 },[])

 console.log(words);
 function card(word){
    return (
    <WordCard 
    word = {word.word}
    meaning = {word.meaning}
    ></WordCard>
    )
          
 }

  return (
    <div>
       <h1 className='count'>No. of Words Learned: {count}</h1>
    
    <div>
    <h1>Words</h1>
   
    <AddWord bookname={data}/>
    
    <div className='wordlist'>
    {words.map(card)}
    

  
  
    
    </div>
    </div>
    </div>
  )
}

export default Wordlist