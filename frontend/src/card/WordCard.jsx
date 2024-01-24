import React from 'react'

function WordCard(props) {
  return (
    <div className='wordcard'>
        {/* <p>Word</p> */}
        
        <h1>{props.word}</h1>
        <hr></hr>
        <p>Meaning:</p>
        <h3>{props.meaning}</h3>
    </div>
  )
}

export default WordCard