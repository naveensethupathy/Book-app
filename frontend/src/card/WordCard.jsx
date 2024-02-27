import React from 'react'
import ViewButton from '../components/viewButton'
function WordCard(props) {
  return (
    <div className='wordcard'>
        {/* <p>Word</p> */}
        
        <h1>{props.word}</h1>
        <hr></hr>
        <p>Meaning:</p>
        <h3>{props.meaning}</h3>
       <button className='deleteButton'>delete</button>
    </div>
  )
}

export default WordCard