import React from 'react'
import './App.css'
import {useState} from 'react'

const ClickEvent = () => {
    const[number, setNumber] = useState(1000)
    const increment =()=>{
        setNumber(number + 1)
    }
    const decrement =()=>{
        if(number >1000){
        setNumber(number - 1)
        }
    }
    const reset=()=>{
        setNumber(1000)
    }
  return (
    <div>
        {number}
        <button onClick={increment} className='button-i'>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent