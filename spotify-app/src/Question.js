import React from 'react'
import './App.css';
const Question = () => {
  return (
    <div>
        <div>
            <h1>Questions</h1>
            <p>We've got answers</p>
            <div className='centerquestions'>
            <Ques1 />
            <Ques1 />
            <Ques1 />
            <Ques1 />
            <Ques1 />
            <Ques1 />
            </div>
            
        </div>
    </div>
  )
}

export const Ques1 = () => {
  return (
    <div >
        <div className='questions'>
        <h5 style={{cursor: 'pointer'}}>What is Spotify and Spotify Premium?</h5>
        <img style={{width:"10px",height:"10px",marginTop:"30px",cursor: 'pointer'}} alt='' src='https://cdn-icons-png.flaticon.com/512/60/60995.png'/>
        </div>
       <hr />
    </div>
  )
}


export default Question