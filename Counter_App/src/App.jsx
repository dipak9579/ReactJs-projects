import React from 'react'
import {useState,useEffect} from 'react'
import './App.css'


const App = () => {

  const [count,setCount]=useState(0)
 
  const increaseCount=()=>{
    setCount(count+1)
  }
  const DecreaseCount=()=>{
    if(count>0)
    setCount(count-1)
  }

  return (
  <>
    <h1 style={{'textAlign':'center','background':'#023047','color':'#fff'}}>Counter App</h1>
    <div className='outside'>
     
    <div className='container'>
      <input type="value" value={count} />
     
      <div className="increase">
          <button onClick={increaseCount}>Increment</button>
      </div>
      <div className="decrease">
          <button onClick={DecreaseCount}>Decrement</button> 
      </div>
    </div>
    
    </div>
    </>
  )
}

export default App
